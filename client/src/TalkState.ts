import { PotatoHead, potato_head_update } from "./PotatoHead";

export interface TalkState {
  state: "idle" | "typing";
  string: string;
  animation_time: number;
  next_letter_time: number;
  current_letter: number;
  talk_speed: number;
}

export interface TalkStateUpdate {
  talk_state: TalkState;
  transcript: HTMLDivElement;
  potato_head: PotatoHead;
}

export const update_talk_state = (
  { talk_state, transcript, potato_head }: TalkStateUpdate,
  time_increment: number
) => {
  talk_state.animation_time += time_increment;
  if (talk_state.animation_time < talk_state.next_letter_time) {
    return;
  }

  switch (talk_state.string[talk_state.current_letter]) {
    case ".":
    case "!":
    case "?":
      talk_state.next_letter_time = talk_state.animation_time + 0.2*talk_state.talk_speed;
      break;
    case ",":
    case ";":
    case ":":
      talk_state.next_letter_time = talk_state.animation_time + 0.0125*talk_state.talk_speed;
      break;
    case " ":
      talk_state.next_letter_time = talk_state.animation_time + 0.05*talk_state.talk_speed;
      break;
    default:
      talk_state.next_letter_time = talk_state.animation_time + 0.05*talk_state.talk_speed;
      break;
  }
  talk_state.current_letter++;
  if (talk_state.current_letter >= talk_state.string.length) {
    /**
     * animation is done
     */
    talk_state.current_letter = 0;
    talk_state.state = "idle";
    potato_head.state = "idle";
    potato_head.animation_time = 0;
    return;
  }
  transcript.innerText = talk_state.string.slice(0, talk_state.current_letter);

  potato_head_update(potato_head, time_increment);
};
