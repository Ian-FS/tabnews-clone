import Image from 'next/image'
import { imagemNossa } from '../src/assets/fotoNossa.png'

export default function Page() {

    return (
        <Image
            src=".././src/assets/fotoNossa.png"
            width={500}
            height={500}
            alt="Picture of the author"
        />
    )
}