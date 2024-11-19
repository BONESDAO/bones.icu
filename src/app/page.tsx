'use client'

import Image from "next/image"
import { Button } from "@/app/ui/button"
import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
    setTimeout(() => {
      setIsModalOpen(false);
    }, 3000)
  }

  return (
    <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden">
      <picture>
        <source
          media="(min-width: 640px)"
          srcSet="/bg_bone.gif?height=1080&width=1920"
        />
        <Image
          src="/BONES-BackgroundImage.gif"
          alt="Bone Logo"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          priority
          unoptimized
        />
      </picture>
      <div className="absolute "></div>
      <div className="absolute sm:top-80 inset-0 sm:flex-row flex flex-col items-center justify-center gap-20">
        <Button className="sm:w-80 sm:h-32 min-w-80 min-h-24 bg-[#bcfc12] text-black border border-black opacity-70 hover:opacity-100">
          <Link href={"https://t.me/bones_icu"} className="size-full flex items-center justify-center text-6xl gap-3">
            <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8482" width="60" height="60"><path d="M883.626667 155.925333s82.88-32.32 75.946666 46.165334c-2.282667 32.32-22.997333 145.450667-39.125333 267.797333l-55.253333 362.453333s-4.608 53.098667-46.058667 62.336c-41.429333 9.216-103.594667-32.32-115.114667-41.557333-9.216-6.933333-172.672-110.826667-230.229333-161.6-16.128-13.866667-34.56-41.557333 2.304-73.877333L717.824 386.773333c27.626667-27.690667 55.253333-92.330667-59.861333-13.845333l-322.346667 219.306667s-36.842667 23.104-105.898667 2.325333l-149.674666-46.186667s-55.253333-34.624 39.146666-69.248c230.250667-108.501333 513.450667-219.306667 764.394667-323.2z" fill="#2c2c2c"></path></svg>
            Bones
          </Link>
        </Button>
        <Button className="sm:w-80 sm:h-32 min-w-80 min-h-24 bg-[#bcfc12] text-black border border-black opacity-70 hover:opacity-100">
          <div className="size-full flex items-center justify-center text-6xl gap-4" onClick={() => handleOpenModal()}>
            <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14731" width="60" height="60"><path d="M471.578947 202.105263v-107.789474h80.842106v107.789474H781.473684a215.578947 215.578947 0 0 1 215.578948 215.578948v404.210526a107.789474 107.789474 0 0 1-107.789474 107.789474h-134.736842a107.789474 107.789474 0 0 1-107.789474-107.789474v-26.947369H377.263158v26.947369a107.789474 107.789474 0 0 1-107.789474 107.789474H134.736842a107.789474 107.789474 0 0 1-107.789474-107.789474v-404.210526a215.578947 215.578947 0 0 1 215.578948-215.578948h229.052631z m444.631579 215.578948a134.736842 134.736842 0 0 0-134.736842-134.736843H242.526316a134.736842 134.736842 0 0 0-134.736842 134.736843v296.421052h808.421052v-296.421052z m0 296.421052h-188.631579 188.631579z m-188.631579 0v107.789474a26.947368 26.947368 0 0 0 26.947369 26.947368h134.736842a26.947368 26.947368 0 0 0 26.947368-26.947368v-107.789474h-188.631579z m-619.789473 0h188.631579-188.631579z m188.631579 0H107.789474v107.789474a26.947368 26.947368 0 0 0 26.947368 26.947368h134.736842a26.947368 26.947368 0 0 0 26.947369-26.947368v-107.789474zM269.473684 431.157895v-80.842106h80.842105v80.842106h80.842106v80.842105h-80.842106v80.842105h-80.842105v-80.842105H188.631579v-80.842105h80.842105z m404.210527 26.947368a53.894737 53.894737 0 1 1 0-107.789474 53.894737 53.894737 0 0 1 0 107.789474z m107.789473 134.736842a53.894737 53.894737 0 1 1 0-107.789473 53.894737 53.894737 0 0 1 0 107.789473z" fill="#2c2c2c"></path></svg>
            Games
          </div>
        </Button>
        <Button className="sm:w-80 sm:h-32 min-w-80 min-h-24 bg-[#bcfc12] text-black border border-black opacity-70 hover:opacity-100">
          <div className="size-full flex items-center justify-center text-6xl gap-1" onClick={() => handleOpenModal()}>
            <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6043" width="75" height="75"><path d="M244.906667 661.333333h58.752a25.6 25.6 0 0 1 25.6 25.6v82.090667a25.6 25.6 0 0 1-25.6 25.6H244.906667a25.6 25.6 0 0 1-25.6-25.6V686.933333a25.6 25.6 0 0 1 25.6-25.6z m254.72-111.061333v218.752a25.6 25.6 0 0 1-25.6 25.6H412.586667a25.6 25.6 0 0 1-25.6-25.6v-218.752a25.6 25.6 0 0 1 25.6-25.6h61.44a25.6 25.6 0 0 1 25.6 25.6z m166.741333 52.010667v166.741333a25.6 25.6 0 0 1-25.6 25.6h-60.586667a25.6 25.6 0 0 1-25.6-25.6v-166.741333a25.6 25.6 0 0 1 25.6-25.6h60.586667a25.6 25.6 0 0 1 25.6 25.6z m168.533333-132.266667v299.008a25.6 25.6 0 0 1-25.6 25.6h-61.44a25.6 25.6 0 0 1-25.6-25.6v-299.008a25.6 25.6 0 0 1 25.6-25.6h61.44a25.6 25.6 0 0 1 25.6 25.6zM197.802667 436.053333l243.626666-215.509333a12.8 12.8 0 0 1 17.237334 0.298667l131.754666 124.586666a12.8 12.8 0 0 0 18.346667-0.810666l132.693333-148.608-51.285333-51.925334h144.725333v134.826667L784.298667 228.693333l-175.36 204.288a12.8 12.8 0 0 1-18.730667 0.725334L457.130667 302.08a12.8 12.8 0 0 0-17.536-0.426667L235.946667 484.053333a12.8 12.8 0 0 1-18.858667-1.962666l-21.12-28.928a12.8 12.8 0 0 1 1.834667-17.152z" fill="#2c2c2c"></path></svg>
            Swap
          </div>
        </Button>
      </div>
      {isModalOpen && (
        <div className="flex flex-col fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 text-[#bcfc12] space-y-6">
          <h1 className="sm:text-6xl text-5xl font-bold mx-4">Coming Soon!</h1>
          <p className="sm:text-2xl text-2xl mx-4 text-center">We are working hard to bring you the best content.</p>
        </div>
      )}
    </div>
  );
}