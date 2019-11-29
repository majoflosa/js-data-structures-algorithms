class DoublyLinkedList {
    // challenge: allow for constructor to take in array, and make each element in array a node on instantiation
    constructor(headValue) {
        this.head = this.createNode(headValue);
        this.tail = this.head;
    }

    createNode(value) {
        return { next: null, prev: null, value: value };
    }
    
    forEach(callback) {
        let current = this.head;
        while (current !== null) {
            callback(current);
            current = current.next;
        }
    }

    findNode(value) {
        let theNode = null;

        let current = this.head;
        while (current !== null) {
            if (current.value === value) {
                theNode = current;
                break;
            }
            current = current.next;
        }

        return theNode;
    }

    // findNextNode(refNode) {}

    // findPreviousNode(refNode) {}

    insertAtBeginning(value) {
        const newHead = this.createNode(value);
        const oldHead = this.head;
        newHead.next = oldHead;
        oldHead.prev = newHead;
        this.head = newHead;

        return this;
    }

    insertAtEnd(value) {
        const newTail = this.createNode(value);
        const oldTail = this.tail;
        newTail.prev = oldTail;
        oldTail.next = newTail;
        this.tail = newTail;

        return this;
    }

    insertBefore(refNode, value) {}

    insertAfter(refNode, value) {}

    removeHead() {}

    removeTail() {}

    removeBefore() {}

    removeAfter() {}

    print() {}
}

const dll = new DoublyLinkedList('Bob');


// = = = = = = = = = = = = = = = = = = = = = = = = = = =
const dllApp = {
    dom: function() {
        this.$list = document.querySelector('.linked-list');
        this.$insertHead = document.querySelector('#insert-head');
        this.$headField = document.querySelector('#head-field');
        this.$insertTail = document.querySelector('#insert-tail');
        this.$tailField = document.querySelector('#tail-field');
        this.$outputEl = document.querySelector('.output p');
    },

    syncDom: function() {
        this.$list.innerHTML = '';

        dll.forEach((current) => {
            const $el = document.createElement('div');
            $el.className = 'linked-list-item ds-item';
            $el.innerHTML = `
                <small>${current.prev ? ' Prev: ' + current.prev.value : ''}</small>
                &nbsp;
                <strong>${current.value}</strong>
                &nbsp;
                <small>${current.next ? ' Next: ' + current.next.value : ''}</small>
            `;
            this.$list.appendChild($el);
        });

        // this.$outputEl.innerText = JSON.stringify(dll, );
    },

    bindEvents: function() {
        this.$insertHead.addEventListener('click', (e) => this.insertAtBeginning(this.$headField.value));
        this.$insertTail.addEventListener('click', (e) => this.insertAtEnd(this.$tailField.value));
    },

    init: function() {
        this.dom();
        this.syncDom();
        this.bindEvents();
    },

    insertAtBeginning(value) {
        if (!value) return;

        dll.insertAtBeginning(value);
        this.syncDom();

        this.$headField.value = '';
    },

    insertAtEnd(value) {
        if (!value) return;

        dll.insertAtEnd(value);
        this.syncDom();

        this.$tailField.value = '';
    }
};
dllApp.init();