interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details { 
    author: string;
    year: number
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

const song = 'New Song'
const {song:anotherSong, songDuration:duration, details} = audioPlayer;
const {author,year} = details;

console.log(song)
console.log(anotherSong)
console.log(duration)
console.log(author)
console.log(year)

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
console.log( dbz[2] );

const trunks = dbz[3]  || 'No hay personaje'
console.log( trunks );

const [,,pj3] = ['Goku', 'Vegeta', 'Trunks']
console.log(pj3)

const [,pj2 ='No hay personaje'] = ['Goku']
console.log(pj2)

export {};