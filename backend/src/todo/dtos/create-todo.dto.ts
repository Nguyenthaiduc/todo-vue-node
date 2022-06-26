/* eslint-disable */
import { IsString, IsBoolean } from 'class-validator';
export class CreateTodoDto {

  @IsString()
  readonly title: string;

  @IsBoolean()
  readonly completed?: boolean;

  // @IsString()
  // readonly description?: string;

}
