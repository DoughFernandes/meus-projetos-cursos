import aranha65 from '@public/spiders/mulher-aranha-65-comic-book.png';

import aranha14512 from '@public/spiders/sp-dr-14512-comic-book.png';

import aranha8311 from '@public/spiders/spider-ham-8311-comic-book.png';

import aranha1610 from '@public/spiders/spider-man-1610-comic-book.png';

import aranha616 from '@public/spiders/spider-man-616-comic-book.png';

import aranha90214 from '@public/spiders/spider-man-90214-comic-book.png';

import aranha928 from '@public/spiders/spider-man-928-comic-book.png';

interface IProps {
  id: string;
}

const getSpidersPicture = ({ id }: IProps) => {
  return (
    id === "spider-woman-65"
     ? aranha65
      : id === "sp-dr-14512"
     ? aranha14512
      : id === "spider-ham-8311"
     ? aranha8311
      : id === "spider-man-1610"
     ? aranha1610
      : id === "spider-man-616"
     ? aranha616
      : id === "spider-man-90214"
     ? aranha90214
      : id === "spider-man-928"
     ? aranha928
      : aranha928
  )
};

export default getSpidersPicture;