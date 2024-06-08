const customMatchers = {
tobePlaying: () => {
    return {
compare: (actual, expected) => {
    const player = actual;
    const song = expected;
    return {
pass: player.currentlyPlayingSong == song && player.isPlaying,
    }
}
    };
},
};

describe("Player", () => {
    let player;
    let song;

    beforeEach(() => {
        player = new Player();
        song = new Song();
        jasmine.addMatchers(customMatchers);
    });
    it("should play a song", () => {
        player.play(song);

        expect(player).toBePlaying(song);
    });
});
