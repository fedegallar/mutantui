import { Mutant } from './Mutant'

export class Pageable {
    content: Mutant[];
    totalPages: Number;
    last: boolean;
    first: boolean;
    size: Number;
    number: Number;
    empty: boolean;
}