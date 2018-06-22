import jsPDF from 'jspdf'
import {loadImage} from '../../utils/toBase64/toBase64'
import {capitalizeWord} from "../index"

export default async (data) => {
  const doc = new jsPDF()
  const sprite = await loadImage(data.sprite)
  const backSprite = await loadImage(data.back_sprite)
  doc.setFontSize(35)
  doc.addImage(sprite, "JPEG", 15, 20, 90, 90);
  doc.addImage(backSprite, "JPEG", 105, 20, 90, 90);

  doc.setFontType('bold');
  doc.setTextColor('#FF3333')
  doc.text(10, 20, capitalizeWord(data.name))

  doc.setFontType('normal')
  doc.setTextColor('#000')
  doc.setFontSize(25);
  doc.text(`${capitalizeWord(data.name)}'s Information`, 58, 120)

  doc.setFontSize(15)
  doc.text(`Height: ${data.height}`, 58, 140)
  doc.text(`Weight: ${data.weight}`, 58, 155);
  doc.text(`Color: ${data.color}`, 58, 170)
  doc.text(`Types: ${data.types.join(', ')}`, 58, 185)
  doc.text(`Abilities: ${data.abilities.join(', ')}`, 58, 200)

  doc.save(`${data.name}.pdf`)
}