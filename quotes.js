const quotes = [
    // Affirmations
    {
        type: "affirmation",
        text: "I am worthy of love, success, and happiness.",
        reference: "",
        background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        emoji: "💖"
    },
    {
        type: "affirmation",
        text: "I choose to focus on what I can control and let go of what I cannot.",
        reference: "",
        background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        emoji: "🎯"
    },
    {
        type: "affirmation",
        text: "Every day, I am becoming a better version of myself.",
        reference: "",
        background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
        emoji: "🌱"
    },
    {
        type: "affirmation",
        text: "I trust in my ability to overcome any challenges that come my way.",
        reference: "",
        background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        emoji: "💪"
    },
    {
        type: "affirmation",
        text: "I am filled with gratitude for all the blessings in my life.",
        reference: "",
        background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
        emoji: "🙏"
    },
    {
        type: "affirmation",
        text: "My potential is limitless, and I am capable of achieving my dreams.",
        reference: "",
        background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
        emoji: "🚀"
    },
    {
        type: "affirmation",
        text: "I radiate confidence, positivity, and grace.",
        reference: "",
        background: "linear-gradient(135deg, #ffd89b 0%, #19547b 100%)",
        emoji: "✨"
    },
    {
        type: "affirmation",
        text: "I am deserving of peace, joy, and abundance.",
        reference: "",
        background: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)",
        emoji: "🌸"
    },
    {
        type: "affirmation",
        text: "I release all negative thoughts and embrace positivity.",
        reference: "",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        emoji: "🦋"
    },
    {
        type: "affirmation",
        text: "I am strong, resilient, and brave.",
        reference: "",
        background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        emoji: "🦁"
    },
    {
        type: "affirmation",
        text: "Today, I choose happiness and let go of worry.",
        reference: "",
        background: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
        emoji: "😊"
    },
    {
        type: "affirmation",
        text: "I am surrounded by love and support.",
        reference: "",
        background: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
        emoji: "🤗"
    },
    {
        type: "affirmation",
        text: "My mind is clear, and my heart is open to new possibilities.",
        reference: "",
        background: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
        emoji: "💭"
    },
    {
        type: "affirmation",
        text: "I trust the journey, even when I don't understand it.",
        reference: "",
        background: "linear-gradient(135deg, #fdcbf1 0%, #e6dee9 100%)",
        emoji: "🛤️"
    },
    {
        type: "affirmation",
        text: "I am enough, exactly as I am.",
        reference: "",
        background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
        emoji: "💝"
    },

    // Biblical Quotes
    {
        type: "biblical",
        text: "I can do all things through Christ who strengthens me.",
        reference: "Philippians 4:13",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        emoji: "⚡"
    },
    {
        type: "biblical",
        text: "The Lord is my shepherd; I shall not want.",
        reference: "Psalm 23:1",
        background: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
        emoji: "🐑"
    },
    {
        type: "biblical",
        text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
        reference: "Jeremiah 29:11",
        background: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
        emoji: "🗺️"
    },
    {
        type: "biblical",
        text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
        reference: "Joshua 1:9",
        background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        emoji: "🛡️"
    },
    {
        type: "biblical",
        text: "Trust in the Lord with all your heart and lean not on your own understanding.",
        reference: "Proverbs 3:5",
        background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
        emoji: "❤️"
    },
    {
        type: "biblical",
        text: "The Lord is my light and my salvation—whom shall I fear?",
        reference: "Psalm 27:1",
        background: "linear-gradient(135deg, #ffd89b 0%, #19547b 100%)",
        emoji: "💡"
    },
    {
        type: "biblical",
        text: "Cast all your anxiety on him because he cares for you.",
        reference: "1 Peter 5:7",
        background: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)",
        emoji: "🕊️"
    },
    {
        type: "biblical",
        text: "And we know that in all things God works for the good of those who love him.",
        reference: "Romans 8:28",
        background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
        emoji: "🌟"
    },
    {
        type: "biblical",
        text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
        reference: "Psalm 34:18",
        background: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
        emoji: "💔➡️💚"
    },
    {
        type: "biblical",
        text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
        reference: "Philippians 4:6",
        background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
        emoji: "🙏"
    },
    {
        type: "biblical",
        text: "He gives strength to the weary and increases the power of the weak.",
        reference: "Isaiah 40:29",
        background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        emoji: "💪"
    },
    {
        type: "biblical",
        text: "The Lord will fight for you; you need only to be still.",
        reference: "Exodus 14:14",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        emoji: "⚔️"
    },
    {
        type: "biblical",
        text: "Peace I leave with you; my peace I give you.",
        reference: "John 14:27",
        background: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
        emoji: "☮️"
    },
    {
        type: "biblical",
        text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles.",
        reference: "Isaiah 40:31",
        background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        emoji: "🦅"
    },
    {
        type: "biblical",
        text: "The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you.",
        reference: "Numbers 6:24-25",
        background: "linear-gradient(135deg, #ffd89b 0%, #19547b 100%)",
        emoji: "🌞"
    },
    {
        type: "biblical",
        text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud.",
        reference: "1 Corinthians 13:4",
        background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        emoji: "💕"
    },
    {
        type: "biblical",
        text: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!",
        reference: "2 Corinthians 5:17",
        background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
        emoji: "🆕"
    },
    {
        type: "biblical",
        text: "Fear not, for I am with you; be not dismayed, for I am your God.",
        reference: "Isaiah 41:10",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        emoji: "🤲"
    },
    {
        type: "biblical",
        text: "God is our refuge and strength, an ever-present help in trouble.",
        reference: "Psalm 46:1",
        background: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
        emoji: "🏔️"
    },
    {
        type: "biblical",
        text: "Commit to the Lord whatever you do, and he will establish your plans.",
        reference: "Proverbs 16:3",
        background: "linear-gradient(135deg, #fdcbf1 0%, #e6dee9 100%)",
        emoji: "📋"
    }
];
