// returns the normalized section (category) of a release
export const getSection = (name, section) => {
  // XXX
  // avoid xXx movie
  if (/[.\-_]XXX|xxx[.\-_]/.test(name) || /XXX/i.test(section)) {
    if (/IMAGESET/i.test(name)) return SECTIONS.XXX_PICS;
    else return SECTIONS.XXX_VIDEO;
  }

  // TV
  // S01E01 or S01D01 format
  if (/S\d+[ED]\d+/i.test(name) || /^TV/i.test(section)) {
    if (/720|1080|2160|[PI]/i.test(name)) return SECTIONS.TV_HD;
    else if (/S\d+D\d+/i.test(name)) return SECTIONS.TV_DISC; // S01D01
    return SECTIONS.TV_SD;
  }

  // MUSIC
  if (/MP3|FLAC|VINYL|MUSIC/i.test(section)) return SECTIONS.MUSIC_AUDIO;

  // GAMES
  // check for common consoles in name
  if (
    /NSW|PLAYSTATION|XBOX|PS4|PS3|PS2|NINTENDO|NDS|WIIU/i.test(name) ||
    /GAME|CONSOLE/i.test(section)
  ) {
    if (/NSW|NINTENDO/.test(name)) return SECTIONS.GAME_NINTENDO;
    else if (
      /PS2|PS3|PS4|PS5|PLAYSTATION/.test(name) ||
      /PS$|PS2|PS3|PS4|PS5|PLAYSTATION/.test(section)
    )
      return SECTIONS.GAME_PS;
    else if (/[.\-_]XBOX/i.test(name) || /[.\-_]XBOX/i.test(section))
      return SECTIONS.GAME_XBOX;

    return SECTIONS.GAME_PC;
  }

  // BOOK
  if (/[.\-_]E?BOOK/i.test(name) || /BOOK/i.test(section)) {
    return SECTIONS.EBOOK;
  }

  // TUTORIAL
  if (
    /TUTORIAL|BOOKWARE|Udemy|Lynda|PluralSight|EggHead|LinkedIn|SkillShare|^Sonic.Academy|Sitepoint|^PACKT|OREILLY/i.test(
      name
    )
  ) {
    return SECTIONS.TUTORIAL;
  }

  // APPS
  if (/APP|PRE|0/.test(section)) {
    if (/LINUX/i.test(name) || /LINUX/i.test(section))
      return SECTIONS.APP_LINUX;
    else if (/MAC/i.test(name) || /MAC/i.test(section)) return SECTIONS.APP_MAC;
    else if (
      /Android|Mobile|IOS/i.test(name) ||
      /Android|Mobile|IOS/i.test(section)
    )
      return SECTIONS.APP_MOBILE;
    return SECTIONS.APP_WIN;
  }

  // MOVIE
  // name must contain a year
  if (/[.\-_][12]\d{3}[.\-_]/.test(name)) {
    if (/720|1080|2160[PI]/i.test(name)) return SECTIONS.MOVIE_HD;
    else if (/COMPLETE|PAL|NTSC/i.test(name)) return SECTIONS.MOVIE_DICS;
    return SECTIONS.MOVIE_SD;
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
