// returns the normalized section (category) of a release
export const getSection = (name, section) => {
  // XXX
  if (/[.\-_]XXX|xxx[.\-_]/.test(name) || /XXX|xxx/.test(section)) {
    if (name.includes("imageset")) return SECTIONS.XXX_PICS;
    else return SECTIONS.XXX_VIDEO;
  }

  // TV
  if (/[Ss]\d+[EeDd]\d+/.test(name) || /^[Tt][Vv]/.test(section)) {
    if (/720|1080|2160|[pPiI]/.test(name)) return SECTIONS.TV_HD;
    else if (/[Ss]\d+[Dd]\d+/.test(name)) return SECTIONS.TV_DISC;
    return SECTIONS.TV_SD;
  }

  // MUSIC
  if (/MP3|FLAC|VINYL/.test(section)) return SECTIONS.MUSIC_AUDIO;

  // GAMES
  if (
    /NSW|PLAYSTATION|XBOX|PS4|PS3|PS2|NINTENDO/.test(name) ||
    /GAME/.test(section)
  ) {
    if (/NSW|NINTENDO/.test(name)) return SECTIONS.GAME_NINTENDO;
    else if (
      /PS2|PS3|PS4|PS5|PLAYSTATION/.test(name) ||
      /PS$|PS2|PS3|PS4|PS5|PLAYSTATION/.test(section)
    )
      return SECTIONS.GAME_PS;
    else if (
      /[.\-_][xX][bB][oO][xX]/.test(name) ||
      /[.\-_][xX][bB][oO][xX]/.test(section)
    )
      return SECTIONS.GAME_XBOX;

    return SECTIONS.GAME_PC;
  }

  // BOOK
  if (
    /[.\-_][eE][bB][oO][oO][kK]/.test(name) ||
    /[.\-_][eE][bB][oO][oO][kK]/.test(section)
  ) {
    return SECTIONS.EBOOK;
  }

  // TUTORIAL
  if (
    /TUTORIAL|BOOKWARE|Udemy|Lynda|PluralSight|EggHead|LinkedIn|SkillShare|Sonic|^PACKT|OREILLY/i.test(
      name
    )
  ) {
    return SECTIONS.TUTORIAL;
  }

  // EVERYTHING ELSE
  return SECTIONS.UNKNOWN;
};

export const SECTIONS = {
  TV_HD: "TV_HD",
  TV_SD: "TV_SD",
  TV_DISC: "TV_DISC",

  MOVIE_HD: "MOVIE_HD",
  MOVIE_SD: "MOVIE_SD",
  MOVIE_DICS: "MOVIE_DICS",

  GAME_PC: "GAME_PC",
  GAME_XBOX: "GAME_XBOX",
  GAME_PS: "GAME_PS",
  GAME_NINTENDO: "GAME_NINTENDO",

  MUSIC_AUDIO: "MUSIC_AUDIO",
  MUSIC_VIDEO: "MUSIC_VIDEO",
  MUSIC_DICS: "MUSIC_DICS",

  APP_WIN: "APP_WIN",
  APP_LINUX: "APP_LINUX",
  APP_MAC: "APP_MAC",
  APP_MOBILE: "APP_MOBILE",

  EBOOK: "EBOOK",
  AUDIOBOOK: "AUDIOBOOK",

  XXX_PICS: "XXX_PICS",
  XXX_VIDEO: "XXX_VIDEO",

  TUTORIAL: "TUTORIAL",
  UNKNOWN: "UNKNOWN",
};
