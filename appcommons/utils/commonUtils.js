import moment from "moment";

export default class Tools {
  static calcDateDifference = (fromDate, toDate, diffIn) => {
    return moment(moment(fromDate, "DD/MM/YYYY HH:mm:ss").toString()).diff(
      moment(toDate, "DD/MM/YYYY HH:mm:ss").toString(),
      diffIn
    );
  };

  static isAlphabet(text) {
    return /^[a-zA-Z -]*$/.test(text);
  }

  static isValidText(text) {
    const re = /^[a-zA-Z0-9/ ,:.'#@%&-]*$/;
    return re.test(text);
  }

  static isValidDate(text) {
    return moment(text, "DD/MM/YYYY HH:mm:ss", true).isValid();
  }
}
