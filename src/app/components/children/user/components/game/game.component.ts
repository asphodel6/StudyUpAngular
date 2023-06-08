import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IQuestion } from '../../interfaces/question.interface';
import { GameService } from '../../service/game.service';

@Component({
  selector: 'user-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [GameService]
})
export class GameComponent {
  public url: string = '../../../../../../assets/images/question-grey.svg';
  public showQuestionModal: boolean = false;
  public currentQuestion!: IQuestion;
  public selectedOption!: string | null;

  public questions: IQuestion[] = [
    { question: 'Вопрос 1', options: ['Ответ 1', 'Ответ 2', 'Ответ 3', 'Ответ 4'], correctAnswer: 'Ответ 1' },
    { question: 'Вопрос 2', options: ['Ответ 1', 'Ответ 2', 'Ответ 3', 'Ответ 4'], correctAnswer: 'Ответ 2' },
    { question: 'Вопрос 3', options: ['Ответ 1', 'Ответ 2', 'Ответ 3', 'Ответ 4'], correctAnswer: 'Ответ 3' },
    { question: 'Вопрос 4', options: ['Ответ 1', 'Ответ 2', 'Ответ 3', 'Ответ 4'], correctAnswer: 'Ответ 4' }
  ];

  constructor(private _gameService: GameService) {

  }

  public showQuestion(): void {
    this.currentQuestion = this.getRandomQuestion();
    this.selectedOption = null;
    this.showQuestionModal = true;
  }

  public getRandomQuestion(): IQuestion {
    const randomIndex: number = Math.floor(Math.random() * this.questions.length);

    return this.questions[randomIndex];
  }

  public checkAnswer(): void {
    if (this.selectedOption === this.currentQuestion.correctAnswer) {
      this._gameService.rightAnswer();
      this.url = '../../../../../../assets/images/question-blue.svg';
    }
    else {
      this._gameService.wrongAnswer();
    }
    this.showQuestionModal = false;
    this._gameService.checkGame();
  }
}
