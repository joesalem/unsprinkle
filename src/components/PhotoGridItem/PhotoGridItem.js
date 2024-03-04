import React from "react";
import styled from "styled-components/macro";

const PhotoGridItem = ({ id, src, alt, tags }) => {
   const srcPrefix = src.replace(".jpg", "");
   const srcsetAvif = `
    ${srcPrefix}.avif 1x, 
    ${srcPrefix}@2x.avif 2x, 
    ${srcPrefix}@3x.avif 3x
  `;
   const srcsetJpeg = `
    ${srcPrefix}.jpg 1x, 
    ${srcPrefix}@2x.jpg 2x, 
    ${srcPrefix}@3x.jpg 3x
  `;
   return (
      <article>
         <Anchor href={`/photos/${id}`}>
            <picture>
               <source type="image/avif" srcSet={srcsetAvif} />
               <source type="image/jpeg" srcSet={srcsetJpeg} />
               <Image alt={alt} />
            </picture>
         </Anchor>
         <Tags>
            {tags.map((tag) => (
               <Tag key={tag} title={tag}>
                  {tag}
               </Tag>
            ))}
         </Tags>
      </article>
   );
};

const Anchor = styled.a`
   text-decoration: none;
   color: inherit;
   outline-offset: 4px;
`;

const Image = styled.img`
   display: block;
   border-radius: 2px;
   margin-bottom: 8px;
   width: 100%;
   height: 300px;
   object-fit: cover;
`;

const Tags = styled.ul`
   list-style-type: none;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
   padding: 4px 0;
`;

const Tag = styled.li`
   display: inline;
   padding: 4px 8px;
   margin: 0 4px;
   background: var(--color-gray-300);
   font-size: 0.875rem;
   font-weight: 475;
   color: var(--color-gray-800);

   &:first-of-type {
      margin-left: 0;
   }
`;

export default PhotoGridItem;
