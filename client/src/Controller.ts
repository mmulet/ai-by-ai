import { match_mother_words } from "./match_mother_words";
import { Responses } from "./Reponses";
import { load_image } from "./load_image";
import { PotatoHead, potato_head_draw, potato_head_update } from "./PotatoHead";
import { TalkState, update_talk_state } from "./TalkState";

export class Controller {
  inputElement = document.getElementById("input")! as HTMLTextAreaElement;

  // Get the response element from the DOM
  responseElement = document.getElementById("output")! as HTMLDivElement;
  computerImage = document.getElementById("computer")! as HTMLImageElement;
  answer_call = document.getElementById("answer-call")! as HTMLDivElement;
  call = document.getElementById("call")! as HTMLDivElement;
  start_call_button = document.getElementById(
    "start-call"
  )! as HTMLButtonElement;
  computer_screen = document.getElementById(
    "computer-screen"
  )! as HTMLDivElement;
  send_button = document.getElementById("send")! as HTMLDivElement;

  speed_button = document.getElementById("speed-button")! as HTMLDivElement;

  head_sprite_sheet = load_image("/static/head_long.png");
  background = load_image("/static/background_10001.png");

  menu_buttons = [
    "file-button",
    "edit-button",
    "view-button",
    "label-button",
    "special-button",
  ].map((id) => document.getElementById(id)! as HTMLButtonElement);

  canvas: HTMLCanvasElement = document.getElementById(
    "video"
  ) as HTMLCanvasElement;
  context: CanvasRenderingContext2D = this.canvas.getContext("2d")!;
  transcript = document.getElementById("transcript")! as HTMLDivElement;

  potato_head: PotatoHead = {
    x: 0,
    y: 0,
    animation_time: 0,
    state: "talking",
    last_idle_animation: "idle_1",
  };

  talk_state: TalkState = {
    state: "typing",
    string: "The RoboTherapist is in. Please, describe your problems.",
    animation_time: 0,
    next_letter_time: 1 / 20,
    current_letter: 0,
    talk_speed: 1,
  };

  responses = new Responses();

  constructor() {
    const computerRect = this.computerImage.getBoundingClientRect();
    /**
     * If image has been scaled, we need to scale the terminal as well
     */
    this.computer_screen.style.left = 55 * (computerRect.width / 512) + "px";
    this.computer_screen.style.top = 50 * (computerRect.height / 512) + "px";
    this.computer_screen.style.width = 400 * (computerRect.width / 512) + "px";
    this.computer_screen.style.height =
      360 * (computerRect.height / 512) + "px";

    this.inputElement.addEventListener("keyup", this.onInput);
    this.start_call_button.addEventListener("click", this.start_call);
    this.speed_button.addEventListener("click", this.change_speed);
    this.send_button.addEventListener("click", this.onSend);
    this.menu_buttons.forEach((b) =>
      b.addEventListener("click", this.onMenuButton(b))
    );

    requestAnimationFrame(this.update_and_draw);
  }

  onMenuButton = (button: HTMLButtonElement) => () => {
    console.log("hello from " + button.id);
  };

  change_speed = () => {
    const are_normal_now = this.talk_state.talk_speed == 1;
    if (are_normal_now) {
      this.talk_state.talk_speed = 0;
      this.speed_button.innerText = "5x";
      return;
    }
    this.talk_state.talk_speed = 1;
    this.speed_button.innerText = "1x";
  };

  start_call = () => {
    console.log("start_call!");
    this.answer_call.style.display = "none";
    this.call.style.display = "flex";
    this.talk(this.talk_state.string);
  };
  onInput = async (event: KeyboardEvent) => {
    if (event.code != "Enter") {
      return;
    }
    await this.onSend();
  };

  onSend = async () => {
    const input = this.inputElement.value;
    this.inputElement.value = "";
    const mother_response = match_mother_words(input);

    const normal_response = await this.responses.respond(input);

    // const normal_response = respond(input);
    const response = mother_response
      ? mother_response + "\n\n" + normal_response
      : normal_response;
    this.talk(response);
  };
  talk = (string: string) => {
    this.talk_state = {
      state: "typing",
      string: string,
      animation_time: 0,
      next_letter_time: 1 / 20,
      current_letter: 0,
      talk_speed: this.talk_state.talk_speed,
    };
    this.potato_head.animation_time = 0;
    this.potato_head.state = "talking";
  };

  lastFrameTime: number | null = null;

  update_and_draw = async (totalTimeElapsed: number) => {
    const timeDifference =
      this.lastFrameTime == null ? 0 : totalTimeElapsed - this.lastFrameTime;
    this.lastFrameTime = totalTimeElapsed;
    const timeIncrement = timeDifference / 1000;

    await this.update(timeIncrement);
    await this.draw();
    requestAnimationFrame(this.update_and_draw);
  };

  update = async (time_increment: number) => {
    if (this.talk_state.state == "typing") {
      update_talk_state(this, time_increment);
    } else {
      /**
       * When talking the talking_state controls the
       * animation of the potato head
       */
      potato_head_update(this.potato_head, time_increment);
    }
  };
  draw = async () => {
    this.context.clearRect(0, 0, 256, 256);

    this.context.drawImage(this.background, 0, 0);
    potato_head_draw(this);
  };
}
