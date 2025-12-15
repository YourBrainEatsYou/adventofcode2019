export const intCode = (program: number[]) => {
  let pointer: number = 0;
  let exit: boolean = false;

  function readFromIndex(index: number) {
    return program[index];
  }

  function writeToIndex(index: number, value: number) {
    program[index] = value;
  }

  // 1: Add
  function Add() {
    const aRegister = readFromIndex(program[++pointer]);
    const bRegister = readFromIndex(program[++pointer]);

    writeToIndex(program[++pointer], aRegister + bRegister);
  }

  // 2: Add
  function Multiply() {
    const aRegister = readFromIndex(program[++pointer]);
    const bRegister = readFromIndex(program[++pointer]);

    writeToIndex(program[++pointer], aRegister * bRegister);
  }

  // 99: Exit
  function Exit() {
    exit = true;
  }

  function run() {
    while (!exit) {
      switch (program[pointer]) {
        case 1:
          Add();
          pointer++;
          break;
        case 2:
          Multiply();
          pointer++;
          break;
        case 99:
          Exit();
          break;
      }
    }

    return program;
  }

  return run();
};
