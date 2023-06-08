import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IQuestion } from '../../interfaces/question.interface';

@Component({
  selector: 'user-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent {
  public showQuestionModal: boolean = false;
  public currentQuestion!: IQuestion;
  public selectedOption!: string | null;

  public questions: IQuestion[] = [
    { question: 'Вопрос 1', options: ['Ответ 1', 'Ответ 2', 'Ответ 3', 'Ответ 4'], correctAnswer: 'Ответ 1' },
    { question: 'Вопрос 2', options: ['Ответ 1', 'Ответ 2', 'Ответ 3', 'Ответ 4'], correctAnswer: 'Ответ 2' },
    { question: 'Вопрос 3', options: ['Ответ 1', 'Ответ 2', 'Ответ 3', 'Ответ 4'], correctAnswer: 'Ответ 3' },
    { question: 'Вопрос 4', options: ['Ответ 1', 'Ответ 2', 'Ответ 3', 'Ответ 4'], correctAnswer: 'Ответ 4' }
  ];

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
      alert('Правильный ответ!');
    } else {
      alert('Неправильный ответ!');
    }

    this.showQuestionModal = false;
  }
}
