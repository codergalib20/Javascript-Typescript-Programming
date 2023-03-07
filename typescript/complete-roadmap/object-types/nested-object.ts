type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { producer: string; writer: string };
};
function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}

const mySong = {
  title: "Unchaied Melody",
  artist: "Righteous Brothers",
  numStreams: 343434,
  credits: {
    producer: "Phil spector",
    writer: "Alex North",
  },
};
calculatePayout(mySong);
printSong(mySong);
