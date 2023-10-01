```javascript
import Image from 'next/image'

export default function PostImage({ src, alt }) {
  return (
    <div>
      <Image
        src={src}
        alt={alt}
        width={500}
        height={300}
        layout="responsive"
      />
    </div>
  )
}
```