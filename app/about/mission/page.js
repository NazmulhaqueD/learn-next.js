import Button from '@/app/components/Button'
import Image from 'next/image'
import React from 'react'
import image from '@/public/headPhone.jpg'

export default function mission() {
  return (
    <div>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eligendi culpa ea eius officia qui magni excepturi. Nobis accusantium velit possimus ab consequuntur quasi id asperiores temporibus praesentium iste sed nulla atque facilis, enim explicabo ad nostrum quis laborum rem! Iusto atque dolorum, perferendis amet voluptatum cupiditate, vero delectus necessitatibus recusandae eveniet qui modi quaerat eos sit odio adipisci dolorem id tenetur impedit corporis ea maxime nam voluptatem. Repellat illo, alias veritatis porro doloribus, amet praesentium dolorum ut officiis vero recusandae nemo voluptate rem, nulla qui omnis autem exercitationem. Nulla earum excepturi officiis molestiae eaque fugit tenetur, expedita nemo debitis.</p>

      <Image src={image} alt='headphone' height={500}></Image>

      <Button></Button>
    </div>
  )
}
