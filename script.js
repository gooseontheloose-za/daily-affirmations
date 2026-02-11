class SwipeCards {
    constructor() {
        this.cardContainer = document.getElementById('cardContainer');
        this.passBtn = document.getElementById('passBtn');
        this.likeBtn = document.getElementById('likeBtn');
        this.cardCount = document.getElementById('cardCount');
        this.progressBar = document.getElementById('progressBar');

        this.cards = [];
        this.currentCardIndex = 0;
        this.isDragging = false;
        this.startX = 0;
        this.startY = 0;
        this.currentX = 0;
        this.currentY = 0;
        this.totalCards = quotes.length;

        this.init();
    }

    init() {
        this.shuffleQuotes();
        this.createCards();
        this.updateCardCount();
        this.attachEventListeners();
    }

    shuffleQuotes() {
        for (let i = quotes.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [quotes[i], quotes[j]] = [quotes[j], quotes[i]];
        }
    }

    createCards() {
        quotes.forEach((quote, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.style.zIndex = quotes.length - index;

            card.innerHTML = `
                <div class="card-type ${quote.type}">${quote.type}</div>
                <div class="pass-indicator">NOPE</div>
                <div class="like-indicator">LIKE</div>
                <div class="quote-text">${quote.text}</div>
                ${quote.reference ? `<div class="quote-reference">${quote.reference}</div>` : ''}
            `;

            this.cardContainer.appendChild(card);
            this.cards.push(card);
        });
    }

    attachEventListeners() {
        // Touch events for mobile
        this.cardContainer.addEventListener('touchstart', this.handleDragStart.bind(this), { passive: false });
        this.cardContainer.addEventListener('touchmove', this.handleDragMove.bind(this), { passive: false });
        this.cardContainer.addEventListener('touchend', this.handleDragEnd.bind(this));

        // Mouse events for desktop
        this.cardContainer.addEventListener('mousedown', this.handleDragStart.bind(this));
        this.cardContainer.addEventListener('mousemove', this.handleDragMove.bind(this));
        this.cardContainer.addEventListener('mouseup', this.handleDragEnd.bind(this));
        this.cardContainer.addEventListener('mouseleave', this.handleDragEnd.bind(this));

        // Button events
        this.passBtn.addEventListener('click', () => this.swipeCard('left'));
        this.likeBtn.addEventListener('click', () => this.swipeCard('right'));
    }

    handleDragStart(e) {
        if (this.currentCardIndex >= this.cards.length) return;

        const card = this.cards[this.currentCardIndex];
        this.isDragging = true;
        card.classList.add('grabbing');

        if (e.type === 'touchstart') {
            this.startX = e.touches[0].clientX;
            this.startY = e.touches[0].clientY;
        } else {
            this.startX = e.clientX;
            this.startY = e.clientY;
        }

        card.style.transition = 'none';
    }

    handleDragMove(e) {
        if (!this.isDragging || this.currentCardIndex >= this.cards.length) return;

        e.preventDefault();

        const card = this.cards[this.currentCardIndex];

        if (e.type === 'touchmove') {
            this.currentX = e.touches[0].clientX;
            this.currentY = e.touches[0].clientY;
        } else {
            this.currentX = e.clientX;
            this.currentY = e.clientY;
        }

        const deltaX = this.currentX - this.startX;
        const deltaY = this.currentY - this.startY;
        const rotation = deltaX * 0.1;

        card.style.transform = `translate(${deltaX}px, ${deltaY}px) rotate(${rotation}deg)`;

        // Show indicators
        if (Math.abs(deltaX) > 50) {
            if (deltaX > 0) {
                card.classList.add('showing-like');
                card.classList.remove('showing-pass');
            } else {
                card.classList.add('showing-pass');
                card.classList.remove('showing-like');
            }
        } else {
            card.classList.remove('showing-like', 'showing-pass');
        }
    }

    handleDragEnd() {
        if (!this.isDragging || this.currentCardIndex >= this.cards.length) return;

        const card = this.cards[this.currentCardIndex];
        this.isDragging = false;
        card.classList.remove('grabbing');

        const deltaX = this.currentX - this.startX;
        const threshold = 100;

        card.style.transition = 'transform 0.3s ease, opacity 0.3s ease';

        if (Math.abs(deltaX) > threshold) {
            if (deltaX > 0) {
                this.swipeCard('right');
            } else {
                this.swipeCard('left');
            }
        } else {
            // Reset card position
            card.style.transform = 'translate(0, 0) rotate(0deg)';
            card.classList.remove('showing-like', 'showing-pass');
        }
    }

    swipeCard(direction) {
        if (this.currentCardIndex >= this.cards.length) return;

        const card = this.cards[this.currentCardIndex];
        card.classList.remove('showing-like', 'showing-pass');

        if (direction === 'right') {
            card.classList.add('swipe-right');
        } else {
            card.classList.add('swipe-left');
        }

        setTimeout(() => {
            card.style.display = 'none';
            this.currentCardIndex++;
            this.updateCardCount();

            if (this.currentCardIndex >= this.cards.length) {
                this.showCompletionMessage();
            }
        }, 300);
    }

    updateCardCount() {
        const remaining = this.cards.length - this.currentCardIndex;
        const completed = this.currentCardIndex;
        const progress = (completed / this.totalCards) * 100;

        this.cardCount.textContent = remaining;
        this.progressBar.style.width = `${progress}%`;
    }

    showCompletionMessage() {
        const message = document.createElement('div');
        message.className = 'card';
        message.style.zIndex = '1000';
        message.innerHTML = `
            <div class="completion-icon">🎉</div>
            <div class="quote-text">You've completed all affirmations for today!</div>
            <p style="color: #636e72; margin: 15px 0;">Take a moment to reflect on these powerful messages.</p>
            <button onclick="location.reload()" class="restart-btn">Start Over</button>
        `;
        this.cardContainer.appendChild(message);
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SwipeCards();
});
