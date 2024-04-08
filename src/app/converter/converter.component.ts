import { Component, OnInit } from '@angular/core';
import { bufferWhen, filter, fromEvent, interval, merge } from 'rxjs';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.scss'
})
export class ConverterComponent implements OnInit {
  inputValue: number = 0;
  inputUnit: string = 'kilometers';
  outputValue: number = 0;
  outputUnit: string = 'meters';

  selectValues = [
    {
      id: 0,
      label: 'kilometers',
    },
    {
      id: 1,
      label: 'meters',
    },
    {
      id: 2,
      label: 'centimeters',
    },
  ];

  ACTIVE_EVENTS: Array<string> = [
    'click', 'scroll', 'contextmenu', 'dblclick', 'mousemove',
  ];

  ngOnInit():void {
    console.log('operations: ', this.minOperations(13)); // TODO: should return 9
    console.log('operations: ', this.minOperations(4)); // TODO: should return 7
    this.inActive();
  }

  convertUnits() {
    if (this.inputUnit === 'kilometers' && this.outputUnit === 'meters') {
      this.outputValue = this.inputValue * 1000; // 1 kilometer = 1000 meters
    } else if (this.inputUnit === 'kilometers' && this.outputUnit === 'centimeters') {
      this.outputValue = this.inputValue * 100000; // 1 kilometer = 100000 centimeters
    } else if (this.inputUnit === 'meters' && this.outputUnit === 'kilometers') {
      this.outputValue = this.inputValue / 1000; // 1 kilometer = 1000 meters
    } else if (this.inputUnit === 'meters' && this.outputUnit === 'centimeters') {
      this.outputValue = this.inputValue * 100; // 1 meter = 100 centimeters
    } else if (this.inputUnit === 'centimeters' && this.outputUnit === 'meters') {
      this.outputValue = this.inputValue / 100; // 1 meter = 100 centimeters
    } else if (this.inputUnit === 'centimeters' && this.outputUnit === 'kilometers') {
      this.outputValue = this.inputValue / 100000; // 1 kilometers = 100000 centimeters
    } else if (this.inputUnit === this.outputUnit) {
      this.outputValue = this.inputValue; // If units are the same, just copy the value
    }
  }

  convertOutput() {
    if (this.outputUnit === 'kilometers' && this.inputUnit === 'meters') {
      this.inputValue = this.outputValue * 1000; // 1 kilometer = 1000 meters
    } else if (this.outputUnit === 'kilometers' && this.inputUnit === 'centimeters') {
      this.inputValue = this.outputValue * 100000; // 1 kilometer = 100000 centimeters
    } else if (this.outputUnit === 'meters' && this.inputUnit === 'kilometers') {
      this.inputValue = this.outputValue / 1000; // 1 kilometer = 1000 meters
    } else if (this.outputUnit === 'meters' && this.inputUnit === 'centimeters') {
      this.inputValue = this.outputValue * 100; // 1 meter = 100 centimeters
    } else if (this.outputUnit === 'centimeters' && this.inputUnit === 'meters') {
      this.inputValue = this.outputValue / 100; // 1 meter = 100 centimeters
    } else if (this.outputUnit === 'centimeters' && this.inputUnit === 'kilometers') {
      this.inputValue = this.outputValue / 100000; // 1 kilometers = 100000 centimeters
    } else if (this.inputUnit === this.outputUnit) {
      this.inputValue = this.outputValue; // If units are the same, just copy the value
    }
  }

  minOperations(n: number) {
    let binaryStr = n.toString(2);
    let operations = 0;

    console.log('binaryStr: ', binaryStr);

    for (let i = binaryStr.length - 1; i >= 0; i--) {
      if (binaryStr[i] === '1') {
          // Check if all subsequent bits to the right are 0s
          let subsequentZeros = true;
          for (let j = i + 1; j < binaryStr.length; j++) {
              if (binaryStr[j] !== '0') {
                  subsequentZeros = false;
                  break;
              }
          }
          // Apply Rule 1 if all subsequent bits are 0s
          if (subsequentZeros) {
              binaryStr = binaryStr.substring(0, i) + '0' + binaryStr.substring(i + 1);
              operations++;
          }
      }
      operations++; // Increment operations for Rule 2
    }

    return operations;
  }

  inActive(): void {
    merge(...this.ACTIVE_EVENTS
      .map(event => fromEvent(document, event)))
      .pipe(
        bufferWhen(() => interval(10000)),      // every 10 sec emit
        filter(events => events.length === 0),
      )
      .subscribe(() => alert('You have been inactive for ten seconds!'));
  }

}
