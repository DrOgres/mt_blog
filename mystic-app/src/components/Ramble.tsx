import { PortableText } from "@portabletext/react";
import { useEffect, useState } from "react";
import sanityClient from "../Client";



const Ramble = ()=>{
    const [postData, setPostData] = useState<any[]>([]);

    useEffect(() => {
      sanityClient
        .fetch(
          `*[_type == "post" && section == 'ramble']{
        title,
        slug,
        date,
        section,
        mainImage,
        body
      }`
        )
        .then((data) => setPostData(data))
        .catch(console.error);
    }, []);
  

    return(
        <div className="max-w-3xl mx-auto px-8 pt-2">
        {postData &&
          postData.map((data) => (
            <div key={data.title}>
              <h2 className="text-slate-600">{data.title}</h2>
              <div className="body pb-6">
                  <PortableText value={data.body}
                  />
                  </div>
                  <hr />
            </div>
          ))}
      </div>
    );
}

export default Ramble;