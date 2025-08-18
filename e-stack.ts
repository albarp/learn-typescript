// Implement a generic Stack class with proper TypeScript typing that supports push, pop, peek, 
// and isEmpty operations.

export class Stack<T> {
    
    // Your implementation here

    private _inner: T[] = [] 

    public push(x: T): void {
        this._inner.push(x)
    }

    public pop(): T | null {
        if(this._inner.length === 0) return null
        else return this._inner.pop()!
    }

    public peek(): T | null {
        if(this._inner.length === 0) return null
        return this._inner[this._inner.length - 1]
    }

    public isEmpty(): boolean {
        return this._inner.length === 0
    }
}

// Test cases
const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.peek()); // 2
console.log(numberStack.pop()); // 2
console.log(numberStack.isEmpty()); // false