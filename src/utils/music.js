import openingSong from "../assets/songs/unique_birthday_song.mp3";
import finalSong from "../assets/songs/final_song_party.mp3";

export const openingMusic = new Audio(openingSong);
openingMusic.loop = true;

export const birthdayMusic = new Audio(finalSong);
birthdayMusic.loop = true;