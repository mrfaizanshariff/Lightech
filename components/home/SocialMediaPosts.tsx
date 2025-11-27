import React from 'react'
import { InstagramEmbed, LinkedInEmbed,XEmbed} from 'react-social-media-embed';

const SocialMediaPosts = () => {
  return (
    <section className='my-10 bg-gray-50 py-8 '>
         <div>
              <h1 className="text-4xl px-8 pt-8 text-primary font-bold tracking-wider mb-2 ltr">Social Media</h1>
          <hr className="mb-4 ml-8"/>
          </div>
        <div className='container mx-auto px-4 grid gap-5 justify-items-center grid-cols-1 lg:grid-cols-3 md:grid-cols-2 content-center'>
        <div >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">LinkedIn</h1>
            <LinkedInEmbed 
            url="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7380519668966477824?collapsed=1"
            postUrl='https://www.linkedin.com/posts/light-technologies-co-ltd_lightech-riaydh-lights-activity-7380519699681456128-arpH?utm_source=share&utm_medium=member_desktop&rcm=ACoAACqTWnEBwQDSajOY0NcqmZTct7al4Rvdtrk'
             height={getEmbedSizeScaled().height} width={getEmbedSizeScaled().width}  style={{ overflowY: 'auto' }}
            />
            
        </div>
        <div >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Instagram</h1>
            <InstagramEmbed url="https://www.instagram.com/reel/DPa7PmjjPdB/?igsh=MWd0bzVuODJjdzZrcw==/?utm_source=ig_embed&amp;utm_campaign=loading" 
              height={getEmbedSizeScaled().height} width={getEmbedSizeScaled().width} style={{ overflowY: 'auto' }}
            />
        </div>
        <div >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">X</h1>
            <XEmbed url="https://x.com/lightech_sa/status/1974756809228398889?s=46" 
             height={getEmbedSizeScaled().height} width={getEmbedSizeScaled().width} style={{ overflowY: 'auto' }}
            />
        </div>
        
        </div>
    </section>
    
  )


}
function getEmbedSizeScaled(screenHeight?: number) {
  const baselineScreen = 900; 

  const w = typeof window !== 'undefined' && screenHeight === undefined ? window.innerWidth : (screenHeight ?? baselineScreen);

  if(w>=1024){
    return{
      width:330,
      height:690
    }
  }else if(w>=1000){
    return{
      width:300,
      height:690
    }
  }else if (w>=768){
    return{
      width:350,
      height:690
    }
  }else{
    return{
      width:330,
      height:710
    }
  }

}

export default SocialMediaPosts