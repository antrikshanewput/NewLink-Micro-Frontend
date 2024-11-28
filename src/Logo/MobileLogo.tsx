import { ComponentProps } from 'react';

import { chakra } from '@chakra-ui/react';

export const MobileLogo = ({ ...rest }: ComponentProps<typeof chakra.svg>) => {
  return (
    <chakra.svg width="73" height="29" viewBox="0 0 73 29" {...rest}>
      <g id="Group">
        <path
          id="Subtract"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.84668 1.59326H10.7432C12.3794 1.59326 13.7649 1.79119 14.8997 2.18705C16.0345 2.55652 16.9582 3.05794 17.6708 3.69132C18.3833 4.32469 18.8979 5.06363 19.2146 5.90813C19.4441 6.50093 19.5904 7.11452 19.6536 7.74889H13.464C13.2542 7.36269 12.9807 7.06579 12.6433 6.85819C12.3003 6.62068 11.9044 6.46233 11.4557 6.38316C11.0335 6.2776 10.6112 6.22482 10.189 6.22482H6.66583V7.74889H0.84668V1.59326ZM0.84668 8.97965V13.9027H15.9532C16.2126 13.8086 16.508 13.664 16.8395 13.469C17.3145 13.2051 17.7499 12.8489 18.1458 12.4002C18.568 11.9252 18.9243 11.371 19.2146 10.7376C19.4676 10.2106 19.6195 9.62458 19.6704 8.97965H13.7863C13.7897 9.04935 13.7913 9.12072 13.7913 9.19376C13.7913 9.74797 13.6858 10.223 13.4746 10.6189C13.2635 10.9883 12.9864 11.2918 12.6433 11.5293C12.3266 11.7405 11.944 11.8988 11.4953 12.0044C11.0731 12.1099 10.6376 12.1627 10.189 12.1627H6.66583V8.97965H0.84668ZM18.3248 15.1335H0.84668V20.0565H6.66583V16.5172H10.5453C10.9939 16.5172 11.4821 16.5699 12.01 16.6755C12.5378 16.7547 13.026 16.9262 13.4746 17.1901C13.9233 17.4276 14.2928 17.7707 14.583 18.2194C14.8733 18.668 15.0185 19.2486 15.0185 19.9611C15.0185 19.9932 15.0182 20.025 15.0177 20.0565H21.0663C21.024 19.1607 20.829 18.3768 20.4814 17.7047C20.1119 16.913 19.6501 16.2665 19.0959 15.765C18.8468 15.5279 18.5898 15.3173 18.3248 15.1335ZM21.0408 21.2873H14.8179C14.7458 21.4864 14.6544 21.6646 14.5435 21.8217C14.2532 22.2703 13.8837 22.6134 13.4351 22.8509C12.9864 23.0884 12.4982 23.2468 11.9704 23.3259C11.4426 23.3787 10.9675 23.4051 10.5453 23.4051H6.66583V21.2873H0.84668V27.9971H10.7432C12.3266 27.9971 13.7517 27.8651 15.0185 27.6012C16.3116 27.3109 17.3937 26.8623 18.2646 26.2553C19.1618 25.6483 19.848 24.8698 20.323 23.9197C20.7173 23.1728 20.9565 22.2953 21.0408 21.2873ZM48.3823 8.32287C48.0656 8.16453 47.5378 7.9534 46.7989 7.6895C46.0863 7.3992 45.2814 7.25405 44.3841 7.25405C43.6716 7.25405 42.9854 7.3992 42.3256 7.6895C41.6923 7.9534 41.1249 8.34926 40.6234 8.87708C40.122 9.3785 39.6998 9.98548 39.3567 10.698C39.0136 11.4106 38.8025 12.2023 38.7233 13.0732C39.3039 12.7037 39.9901 12.3738 40.7818 12.0835C41.5735 11.7669 42.4708 11.6085 43.4736 11.6085C44.6876 11.6085 45.7828 11.8064 46.7593 12.2023C47.7621 12.5982 48.6066 13.1524 49.2928 13.8649C49.979 14.5775 50.5068 15.4351 50.8762 16.438C51.2457 17.4408 51.4304 18.5492 51.4304 19.7632C51.4304 20.9772 51.2325 22.1252 50.8366 23.2072C50.4408 24.2892 49.8602 25.2393 49.0949 26.0574C48.3295 26.8491 47.3927 27.4825 46.2843 27.9575C45.2022 28.4325 43.9487 28.6701 42.5236 28.6701C41.1776 28.6701 39.9109 28.4457 38.7233 27.9971C37.5621 27.5221 36.5461 26.7831 35.6752 25.7803C34.8307 24.751 34.1577 23.4579 33.6563 21.9009C33.1813 20.3174 32.9437 18.4173 32.9437 16.2005C32.9437 14.2476 33.1813 12.4266 33.6563 10.7376C34.1577 9.04862 34.8967 7.58394 35.8731 6.34358C36.8496 5.10322 38.0372 4.12676 39.4359 3.41422C40.861 2.70167 42.5104 2.3454 44.3841 2.3454C45.8092 2.3454 47.0232 2.53013 48.026 2.8996C49.0553 3.26907 49.8866 3.61215 50.52 3.92883L48.3823 8.32287ZM38.6046 17.5464C38.6046 18.734 38.7101 19.7368 38.9212 20.5549C39.1588 21.3466 39.4491 21.98 39.7921 22.4551C40.1616 22.9301 40.5838 23.2732 41.0589 23.4843C41.5339 23.669 42.0222 23.7614 42.5236 23.7614C43.632 23.7614 44.5029 23.3919 45.1363 22.653C45.796 21.8877 46.1259 20.9112 46.1259 19.7236C46.1259 18.6152 45.796 17.7443 45.1363 17.111C44.4765 16.4776 43.6452 16.1609 42.6423 16.1609C41.6923 16.1609 40.8873 16.306 40.2276 16.5963C39.5942 16.8602 39.0532 17.1769 38.6046 17.5464ZM64.7283 3.05794L53.9608 19.0507V23.4447H65.0845V27.9971H70.3891V23.4447H72.9226V18.9715H70.3891V3.05794H64.7283ZM65.0845 9.74797V18.9715H59.0675L65.0845 9.74797Z"
        />
        <path
          id="Vector 191"
          d="M30.7695 1.39502L24.6157 28.4718"
          strokeWidth="4.61536"
          strokeLinejoin="round"
        />
      </g>
    </chakra.svg>
  );
};