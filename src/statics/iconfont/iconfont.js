import { createGlobalStyle } from 'styled-components';

createGlobalStyle`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1552203721443'); /* IE9 */
    src: url('./iconfont.eot?t=1552203721443#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAYgAAsAAAAAC0wAAAXUAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqJcIgrATYCJAMUCwwABCAFhG0HRBuzCVGUTU6f7CtsynAv2k5sGJ3HPQRyehcEEEUzsBb8AEABgCMsABF8v99vz5X3cU8mSZtPJ5GokEgQCpUEsUEpFpJn8ltvp2VzL+VKv+2jGULVspSEyITiaG7DPNQLBTyRTJP2Z7uJ3cxKxud5L01SHwod9lqnUAojrpDKg3Kdk83HUUhHfpFljp5DGe3/cyz1Ii2f57+2c8nKVQKODnhA0WWjgQYNfIK2RXYRewIvJtBjgWPONqcrV1WALvCWG0ViXDVkV3LIocvUpBxYxJOqKz2kywCP9s/Hn9CoktQMdjy/Xgvc7NNmSWZblrs0ERTtecEcRsYmUIjbVP+NgqvdtPU9af6ioxn8rkuSPofJRC5pW3z1jIw96B8eWZEE0QB9H4E90pWVU+giMp8yeZohEheR+C5R7ou+mgf0YBHEI2kbGOfs5yTFpOebDduYVx3ETTsbsCW3BZsyezvjPLqDlZGdk7QjGokeuQPcvo2CKAYODxMqAceDNeydEuKowH80YNWDS1BRm5iitc6iv5ysPSTmAaAeouMi7iqoIgiViIvHdq8H2A1i/hQIdhg27z6opBcu27dBQXFu5YhF3jrxmi2hKsN2T3WpochOsnXLlPRSEWev1itoyR3Q8r10CAJ++3YjJ+Ak953D0bx9Yj7V47bjNp7J3l3FhVvV2J07GB91KSMbKgikKKSqgqKIzittWfsootMKUvpuWrvb0TvJyH0I5z8K0zquFI6uFWl1DvwG3w133Fg1iSqJeJSAUS/C3IVz1MoI3ToHTKO3R9UJq5ZzWpWM2MT7alh1hpYTdSSXZXQqx8Sgo0FNMXiHBA2ra8MRSVLmNPHqNM0ahzVK7caNax3XKjQbKq3TT2ejcWDVvw9T1COkLwWatnv3NCh5Inwp+Yjxnz/GR8rTVvweCi38X+qzAcebsm74pN9otPxfR2hNLMKg1LqWxGHj34l9/WeiEbCUEtTli7dIK8V5ybEvq4j+SwqH30r4I+wMPJeP8ds8ajRJzcicOWt03gZZwSjpVWe7x+przWqmpI8umlCq72kvmWxtMjO5iY0qemhnPDgVNybQagKUFfNzy1bOtSqBMmhoy5YhQwPRJwo+EVbtUhoXV/osUJzG9dQUnXwUHCM7l8bTAsTZjggTsHmkd+cNt1HO1frueiC0yjwyJ7rFos/CuYrtgL9CzAyOAZHEtEKMr51haCDiVh8Z33x5SjCScu6ZRT1C5yc55xXlK1KRoNRzTyMnL89PdMmF33kor2TG+JeZ0Q9luSPJQsAjihTrX0q8In+Jyd9rTCiP7KZrYGl+CfQxIxUu6DAKD1qGKuhiebFjrrQAJm8FpxT7zXKdC/vO9MzrDlvruwEOXQsX9SN6eBGM8eZUunbIuuGXg4FzUvNMRolMiclgcIxJVU9F3EJULhTpgmeazZCknzvnFhqSLjG4Hr1Cz68cnkCb6qXpXz5h1vhlPdv4/jOJusL7T2/+vdz6/fuK2Z6k1jnBjDTpdGm4HmUubVleHOFr/lxidYYrzcYvyp46PyX3sjTTS+EAoP2fX7LNmFlIL/QXX+adGfpINtJc/YrVnfj/LvF/M/Sx8V0g+lq2COR7nnSD0opPQlFyXpFV4KhFnKjLxWL1CsgeH5k01IMPITzituMa12YxdBn3IemYh6zLIrJgN6HqtQONLofQY0M8vNeopiBKN9ZNDMKQBcmAZ8iGbGTBHqgmfGgMRQF6XITdCXsth1JPc5B5KIDEUHgyRc3l1Z3WM0q+zpygyqbf0XGVFFBQcLS0RROdNnbpgTQangjqkAGMXQ51naA6pCLv9bLnWVNEmtLeqZfI4OpOORDjQQIgYqDgEZNoLu2px77/DEl8OsbJmVQSv0MOl7J8QLxQArnVm6UmHUt3F5CMDMIrAn2kgxgAE16kozwBNX09FeJ5enKNrGUKicW0rL7Xv9E4xor/cUp4ixopcpSo0Sh3lmLmU1htlMIo9pnZtQ+F4wA=') format('woff2'),
    url('./iconfont.woff?t=1552203721443') format('woff'),
    url('./iconfont.ttf?t=1552203721443') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1552203721443#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
