import { NextSeo } from 'next-seo'
import Layout from '../components/Layout'
import { getOpenGraphImage } from '../utils/og-image'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Atakan Zengin • Software &amp; Art"
        titleTemplate="%s"
        description="Hey I'm Atakan! I'm a software developer and an art enthusiast."
        canonical="https://atakanzen.com"
        twitter={{
          handle: '@atakanzen_',
          cardType: 'summary_large_image',
        }}
        openGraph={{
          type: 'website',
          url: 'https://atakanzen.com',
          title: 'Atakan Zengin',
          description:
            "Hey I'm Atakan! I'm a software developer and an art enthusiast",
          images: [getOpenGraphImage('Atakan Zengin')],
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'Atakan Zengin, Zengin, Software Development, 3D Art',
          },
        ]}
      ></NextSeo>
      <Layout index={true}>
        <section className="flex flex-col items-center text-center mx-auto max-w-xl mt-3">
          <p className="pb-4">
            Istanbul, Turkey. I'm currently working at an{' '}
            <span className="font-medium">E-commerce</span> platform.
          </p>
          <p className="pb-4">
            I always want to create the best solutions and products for the
            people. I believe with hard work and passion, I'll be able to
            contribute to our ever-growing technology, and create immersive and
            unique works.
          </p>
          <p>
            If you have any enquiries, please don't hesitate to contact me from{' '}
            <a href="mailto:atakanzzengin@gmail.com" id="link">
              atakanzzengin@gmail.com
            </a>
          </p>
        </section>
      </Layout>
    </>
  )
}
