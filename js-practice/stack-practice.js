class Stack {
    constructor(initialStorage = {}) {
        this._storage = initialStorage;
        this._count = Object.keys(initialStorage).length;
    }

    push(value) {
        this._storage[this._count] = value;
        this._count++;

        return this._storage;
    }

    pop() {
        if (this._count === 0) {
            console.log('Stack is already empty.');
            return false;
        }

        const popped = this._storage[this._count - 1];
        delete this._storage[this._count - 1];
        this._count--;

        return popped;
    }

    peek() {
        if (this._count === 0) {
            console.log('Stack is empty');
            return false;
        }

        return this._storage[this._count - 1];
    }

    count() {
        return this._count;
    }

    storage() {
        return this._storage;
    }
}

const initialStorage = {
    0: 'Bob',
    1: 'Beth',
    2: 'John',
}
const stack = new Stack(initialStorage);
console.log('stack: ', stack);

// = = = = = = = = = = = = = = = = = = = =
const stackApp = {
    dom: function() {
        this.$stack = document.querySelector('.stack');
        this.$push = document.getElementById('push');
        this.$pushInput = document.getElementById('push-input');
        this.$pop = document.getElementById('pop');
        this.$outputEl = document.querySelector('.output p');
    },
    syncDom: function() {
        const items = Object.entries(stack.storage());
        const $items = items.map((item) => {
            const $element = document.createElement('div');
            $element.className = 'stack-item ds-item';
            $element.innerHTML = `${item[0]} - ${item[1]}`;

            return $element;
        });
        
        this.$stack.innerHTML = '';
        $items.forEach(($item) => {
            this.$stack.appendChild($item);
        });

        this.$outputEl.innerHTML = JSON.stringify(stack.storage());
    },
    domPush: function(value) {
        if (!value) {
            console.log('No value provided; nothing was added to stack');
            return false;
        }
    
        stack.push(value);
        this.syncDom();
    
        this.$pushInput.value = '';
    },
    domPop: function() {
        stack.pop();
        this.syncDom();
    },
    bindEvents: function() {
        this.$push.addEventListener('click', (e) => this.domPush(this.$pushInput.value));
        this.$pop.addEventListener('click', (e) => this.domPop());
    },
    init: function() {
        this.dom();
        this.syncDom();
        this.bindEvents();
    }
};

stackApp.init();
