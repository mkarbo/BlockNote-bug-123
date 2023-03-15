import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import getEditorBlock from '@/components/blocknote'
import { useState } from 'react'
import { Block } from '@blocknote/core'

const Editor = getEditorBlock();

export default function Home() {
  const [blocks, setBlocks] = useState<Block[]>()
  return (
    <>
      <Editor onUpdate={(bs) => setBlocks(bs)} />
      <br />
      <br />
      <br />
      <pre>{JSON.stringify(blocks, null, 2)}</pre>
    </>
  )
}
