const getLibrary = async () => {
    return {
        title: 'Japanese',
        description: 'Library for my Japanese learning.',
        statistics: {
            cardsPracticedToday: 0,
            weeklyGoal: 32,
            currentStreak: 0,
        },
        cardpacks: [{
            icon: '🦊',
            title: 'Animals',
            description: 'Pack containing animal words',
            cardCount: 15,
            cardsLearned: 0,
        }]
    }
}

export default getLibrary