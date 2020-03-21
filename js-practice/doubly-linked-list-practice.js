const dll = new DoublyLinkedList('Bob');


// = = = = = = = = = = = = = = = = = = = = = = = = = = =
const dllApp = {
    dom: function() {
        this.$list = document.querySelector('.linked-list');
        this.$insertHead = document.querySelector('#insert-head');
        this.$headField = document.querySelector('#head-field');
        this.$insertTail = document.querySelector('#insert-tail');
        this.$tailField = document.querySelector('#tail-field');
        this.$removeTail = document.querySelector('#remove-tail');
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
        this.$removeTail.addEventListener('click', (e) => this.removeTail());
    },

    init: function() {
        this.dom();
        this.syncDom();
        this.bindEvents();
    },

    insertAtBeginning: function(value) {
        if (!value) return;

        dll.insertAtBeginning(value);
        this.syncDom();

        this.$headField.value = '';
    },

    insertAtEnd: function(value) {
        if (!value) return;

        dll.insertAtEnd(value);
        this.syncDom();

        this.$tailField.value = '';
    },

    removeTail: function() {
        dll.removeTail();
        this.syncDom();
    }
};
dllApp.init();