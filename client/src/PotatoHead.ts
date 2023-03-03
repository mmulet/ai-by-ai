export interface PotatoHead {
  x: number;
  y: number;
  animation_time: number;

  state: "idle" | "talking" | "idle_1" | "idle_2" | "idle_3" | "idle_4";

  last_idle_animation: "idle_1" | "idle_2" | "idle_3" | "idle_4";
}

export const potato_head_update = (p: PotatoHead, timeIncrement: number) => {
  switch (p.state) {
    case "idle":
      p.animation_time += timeIncrement;
      if (p.animation_time > 1.5) {
        p.last_idle_animation = get_new_idle_animation(p.last_idle_animation);
        p.state = p.last_idle_animation;
        p.animation_time = 0;
        return;
      }
      return;
    case "idle_1":
    case "idle_2":
      p.animation_time += timeIncrement;
      if (get_raw_idle_1_or_2_frame(p.animation_time) >= idle_1_and_2_map.length) {
        p.state = "idle";
        p.animation_time = 0;
        return;
      }
      return;
    case "idle_3":
    case "idle_4":
      p.animation_time += timeIncrement;
      if (get_raw_idle_3_or_4_frame(p.animation_time) >= idle_3_and_4_map.length) {
        p.state = "idle";
        p.animation_time = 0;
        return;
      }
      return;
    case "talking":
      p.animation_time += timeIncrement;
      return;
  }
};

const get_new_idle_animation = (
  last_idle_animation: "idle_1" | "idle_2" | "idle_3" | "idle_4"
) => {
  while (true) {
    const random = random_idle_animation();
    if (random === last_idle_animation) {
      continue;
    }
    return random;
  }
};

const random_idle_animation = () => {
  const random = Math.random();
  if (random < 0.1) {
    return "idle_1";
  }
  if (random < 0.3) {
    return "idle_2";
  }
  if (random < 0.66) {
    return "idle_3";
  }
  return "idle_4";
};

export interface DrawState {
  potato_head: PotatoHead;
  context: CanvasRenderingContext2D;
  head_sprite_sheet: HTMLImageElement;
}

const get_potato_frame = (potato_head: PotatoHead) => {
  switch (potato_head.state) {
    case "idle":
      return {
        sx: 0,
        sy: 0,
      };
    case "idle_1":
    case "idle_2": {
      const frame =
        get_raw_idle_1_or_2_frame(potato_head.animation_time) % idle_1_and_2_map.length;
      const sprite_index = idle_1_and_2_map[frame];

      const sprite_x = sprite_index % 8;
      const sprite_y = Math.floor(sprite_index / 8);
      return {
        sx: sprite_x * 256,
        sy: sprite_y * 256 + 256 * (potato_head.state == "idle_1" ? 0 : 2),
      };
    }
    case "idle_3":
    case "idle_4": {
      const frame =
        get_raw_idle_3_or_4_frame(potato_head.animation_time) % idle_3_and_4_map.length;
      const sprite_index = idle_3_and_4_map[frame];
      if (potato_head.state == "idle_3") {
        const sprite_x = sprite_index % 8;
        const sprite_y = Math.floor(sprite_index / 8);
        return {
          sx: sprite_x * 256,
          sy: sprite_y * 256 + 256 * 4,
        };
      }
      const sprite_x = sprite_index % 6;
      const sprite_y = Math.floor(sprite_index / 6);
      /**
       * idle 4
       */
      return {
        sx: sprite_x * 256 + 256 * 2,
        sy: sprite_y * 256 + 256 * 5,
      };
    }
    case "talking": {
      const frame = Math.floor(potato_head.animation_time * 40) % 6;
      const sprite_index = talking_map[frame];
      return {
        sx: 256 * 2 + sprite_index * 256,
        sy: 256 * 7,
      };
    }
  }
};
const talking_map = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 2,
  5: 1,
};

const idle_1_and_2_map = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 15, 15, 15, 14, 13, 12,
  11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0,
];

const idle_3_and_4_map = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0,
];

const get_raw_idle_1_or_2_frame = (time: number) => Math.floor(time * 10);

const get_raw_idle_3_or_4_frame = (time: number) => Math.floor(time * 10);

export const potato_head_draw = ({
  potato_head,
  context,
  head_sprite_sheet,
}: DrawState) => {
  const { sx, sy } = get_potato_frame(potato_head);
  context.drawImage(
    head_sprite_sheet,
    sx,
    sy,
    256,
    256,
    potato_head.x,
    potato_head.y,
    256,
    256
  );
};
