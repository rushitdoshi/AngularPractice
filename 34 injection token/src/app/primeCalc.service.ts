import { InjectionToken} from '@angular/core';

export let PRIME_TOKEN = new InjectionToken<PrimeCalc>('primeCalc');

export interface PrimeCalc {
    calculatePrime (): number; 
}