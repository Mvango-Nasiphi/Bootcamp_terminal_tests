export default function isFromCapeTown(regNmbr) {
    if (regNmbr.startsWith('CA')) {
      return true;
    } else
      return false;
  }