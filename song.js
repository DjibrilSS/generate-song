function generateSongText() {
  let ok = "ок";
  for (let i = 99; i >= 0; i--) {
    if (i > 10 && i < 20) {
      ok = "ок";
    } else if (i === 1) {
      ok = "ка";
    } else if (i >= 2 && i <= 4) {
      ok = "ки";
    } else if (i % 10 === 1) {
      ok = "ка";
    } else if (i % 10 >= 2 && i % 10 <= 4) {
      ok = "ки";
    } else {
      ok = "ок";
    }
    console.log(`${i} бутыл${ok} пива на стене, ${i} бутыл${ok} пива!`);
    i--;
    if (i > 10 && i < 20) {
      ok = "ок";
    } else if (i === 1) {
      ok = "ка";
    } else if (i >= 2 && i <= 4) {
      ok = "ки";
    } else if (i % 10 === 1) {
      ok = "ка";
    } else if (i % 10 >= 2 && i % 10 <= 4) {
      ok = "ки";
    } else {
      ok = "ок";
    }

    if (i === 0) {
      console.log(`Возьми одну, пусти по кругу, нет бутылок пива на стене!`);
    } else {
      console.log(
        `Возьми одну, пусти по кругу, ${i} бутыл${ok} пива на стене!`
      );
      i++;
    }
  }
}
