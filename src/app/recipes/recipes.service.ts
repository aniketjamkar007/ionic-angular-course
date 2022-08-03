/* eslint-disable arrow-body-style */
/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Scnitzel',
      imageUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgSFRUZGBgYGBgYGRoYHBoYGB0YGRoaGhoZGhocIS4lHB4rHxgYJjgnKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzErJSsxNDQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAgMEBQYBBwj/xAA7EAABAwIEAwUGBAUFAQEAAAABAAIRAyEEEjFBBVFhBiJxgZETMqGx0fAUQlLBB2JykuEjQ1SC8TMV/8QAGQEAAgMBAAAAAAAAAAAAAAAAAAECAwQF/8QAJxEAAwACAQQCAgMAAwAAAAAAAAECAxEhBBIxQVFhInETFDKBofH/2gAMAwEAAhEDEQA/AN8iyZNYLrHyYAJJ5LmG3THJS6bHOsBKmYbh+7/T6qwYwAQBC0Rgb5rgqrIl4IVLAfqPkFLZRaNAnIQtExM+EU1TfkFXcbxbKdF7nOy90gR70nlzKsSqri2AZWAa890GSNyo58nbD+SPa34PHvYVH5ixjnX+/NJ4xwt7GsfcEi4IMgr12jhKbG5WMDfJMVcK13vAHxuuK8jXjRKcHyzy/B8FrZGOY0y8jvbAc1oWdlszWNe6S0hx5ErWHDgAACAF1jIVby22WzhlDB4HnpGmXBoIi2yzeJ7F12iGPDgDM6GPkVs2v2T9B55q3+R1rZbNVHgxrcCxgAcJcNS7VFVjbZRdaDtVgs1E1Ge80TbluFjcDXk+96oe09M0Y67lssOFVPYVS9ogO95v7rVUON0zAJgnmsZiarmmWjNPmn8pIEa9dlox56ha9EMmKbe35N43Gsic49U9RxjHWa9p8wsG2SYzeS4aRBzaEGZ5FXrrX7RT/WXyejIWHZxfEbVPgFMw3arIWsrDXV40HUhXx1UU9eCuunpeOTWoUejimvAc1wIOhCfDloKDqEIQB2ULiEwFpDmA2IBXQUJgQK/CmO07p6KsxHDXtuBmHRaRCqrFNE5ukY11QAwTB6pJxDf1BaXH8KpVhD235ix9QslxLsrUZ3mOzt5fmH1WasNT45NEXNeeB38Uz9QQs+7D8wZ3XFTtl/Yvk1mEwbnm1gNTsFf4XCtYO6L7k6lOU6YaA1ogBOgLbjwqefZhvI6/QBCF1WlYIQgJN6AbqPgKA92YzKnVWTIVcuNnuqpt/JfCWheULhYgFJc9ZnyWCTRBJBMRqVHcy9rp18rgUmlrwLkbYCnWMPJOMpTok1cU2mJLhKH2yt1wg5fga4rUyUH5jHcd8ivM8I0aZlcdp+PZyWNv9FTYbK4Ixt1t+vX6NUR2zyWrCQLFTKJsJ9VAogyNFMY2+tlbobJYAEFD3AgmL8k0xnM2TGLrNZrJ/ZIFLb4F4dwuTadkxi2hzZmIsozsQHN7hudt1Q4nFvaYyu3mZhOVssUmm7L4+pTqezcTldJA1HlyW6w+MO68i4VjX+1ZlBJLgANuq9OobLo9PT7dGHqZSrZoaNYFPhVWGfCsKT1rTMg7CEppldhSAQhKhchAAEpIldlAClwFclCAEHCsNyxvoEJcoUdIexACUFxdTECEISAFyUEqPXxGVQt6WxpbY5XqARdR3taeihueXFPMBK4eec1U6x6/TLp0vIpzG/qTLg0auTWPdlbJcB+/QLMYziRm2Y/eiyVWdPTlGiMapb2ah9dm5USvxOmz7lY3F8SeCBkcS6IFt1X1sVVdqwgbXBTSz15ei9YJ9mrx3aa0NsFlOJcdc4mDPyUFtB78zYJOo2EfuuUOGghzqkjJrE6C6unAt7p7ZPUQuBnBvc/MXSequsDgIEgm6i4Gqz3WiGz62t5q0w5GQPm0ieh5LQ0Uzmm3qWL/AAsCCmn1GsGpJ11sOii43iDjYfBV1KoXGCNVFo1TOlyXb+J2GW33zUQvLjJMyu0sOcsGwHNKbhXOc1rdXFoG1yQokHSXgm4Hhz3mGNJPXQdZWhwvZ1rRNR02uG6eu6tfZtw1JrG+8bSdSdyotKo6c03SXL5MlZaf+RNHDYZp7lMSNDH1UqrVa2CGyD5KNUbfM2x3GyPeEcro36IPnlj4xLDrI8/oma+Ece9TquB5Ekj/AAmHiE6x5AtrKP5H8iS14F4Pi9ej3a7C9mzm3I+qm0O1VFxjK8dSLKNSxJ0ddQuI8Kzgvouyu3bsfoVox9XcrW9g4mnytGww+IY8ZmODh0ThXluF4nUov1LXjUG09CFvsJxHOxr7XE810cOZWvspyYXH6LJCZZXBTsrQVHUFclEoA6hclCAOhCAhAAgoXHJANVXwFVVHlxUnGP2TFFqoyfk+0nPHI7RpqSQGgk6AShjVjuKccc5z2SQwaAWkaXjVU25xzyW48byPSEcaxDqjg6XRy0ACjUqcjTfzSnPe6AQAIH3PNOUsM9suMbQBBPXzXNe29s37SXahjEU2tLT7sak3MqvxD7ZdxrG41kKzxOFzXM3uZgm+3RM0eHgS8gW5GyFyCpIhYfC5u8LkCbeqaxGOZm9mGl0SCdL9U9icVkPcyzcQSYgeCoaVZj3uhr2umbwWSf5t1dMvW2Y8/UafbLW/sW6m3MSyOcT80Y/iBYxtO0mTAtPUqJ+GIfma4CTOWSIHSVzHYepWyuZOUWMiN9RvoVPUtcsr6XHc5e5r0IwuLkw5W2CotkuHPQ2hQsFw4UySZuMo0Jv46KfTphgh8tI2NrKq9ejq+Swp1GwZu74R1Cu+zdHNWBMdxubz0H30WYZiQ0EjfzV/2QxbW1XNc672gNk7i8ffJZczpQ2iq5fazScYe7MBtHK0qHSdGm+2yvMRSD2kFU1WlkOUojKsk9y/8Ma+DocVwzMjzC4CjPBlS0yQPAPe238UgOUhlfvyYyn3gUw7W2ilc8bQkdaFIpVQ3qowSlBPXI2tlb2l4Ga0V6fvtgFpMBw/YhWWA7jGs/SAFIwrrxzCjt99zeR+BAP7rf0dLevkryU2tP0WVCrCsqVRU9JTaT100zOyxzLoKjseltKmIelCRKEwHEIQkAJDyllN1EgKrEu7ycoBMVfeUmiqp5bJvwSmhYLGFjXuy2bmNpkwJ3W8vBjWLTz2XmnFWOY97HAZgYt+YkAz8Vn6tfijX0fNMnUsUD3WkSJPRP0agIJFjO8z5KowtYMALjcjKPKLDnqrGjhC4F73ESIAH7rmtGq5SHGuL5F5HKPO5TL2jKRMwSIaZ2tJHVSg9jWQSBrcC8Ha6rCO9JfE/NCIpGa41Vdns0NMRPhy5qHULmMY5xJLiHDSIhabiuDa8B28WOt1nsXgKjmtbmGVosAN1oVS1yYv61fy93reysq4vM4BbThZ/wBFp6RPPr8lj/wDhN/UELeewYymKbbBjYH6jI1B5yZUMjWuDfCe+SnxgAPM7XgDwPIH5pOHYXk5myRYbmL6WnzKV+Ea10uc58kxJAiBOp+7Kxo5QM8AEcuihvgspkelgS4mbC3T0UHG1Qx4DHERcXuI3HorJ1eDqIJ0g6WUHF0BnDgLREaHTvTCSWxKvk3HZXtC3ENyucPaNHeH6v5grnF0WvF9RoV5OHvY4PpuhzSMrhE6d4RyWq4X2wa45K7RTcPzTLDpr+krHeKsTdY1tfBnyYudouH0XsNxI5jRdJgKVSxbXCQZB5aLlVjXbweicdTL4rh/9FLTRFaF0sQcO4aEFO+yOWYM6c/ktS5XAtoYcF0PIUXH8RZSbmfJgjMALgExKewOKZXYKjHiDa5AM7iNihQ3yhdy3rZPwb9TGyoG8QaMU9p0JDZ2loAVrjcWyixziZIBtzOwHmvOG4l2YuM5nOJM8yZ+anFOaWvRbjxqt7PUWFSGvVRwnE56bHbxB8QrNpXXmtrZjqdPTJlJ6lMKrqZVhR0Vksg0OIXYQpiHUICEACQ8Ja4QogU+JbDk5RKdx1O0qLh37KCWqJ72ixYVkO2PDHF4qicrgA6P1DQ+gC1rCu1mNcxwfGWDM8uaWWFcaJYcji9o8vw9Ftqj2XvBPu93krL2xdZu0c1ExWIph2Uxl7waSdp0lIfinjvMYSNSLCT4dBK49I6r+WO4qo+YgkaHmo1Wo5zsogCBImRadyVLLw65aRIHvG+ukeYUPGVmsJIPu5Te8626KKTDe/Q1ie67M15g92JOkQRHNIa5gGhkJvE4tje+TY+Ivtbmo9TEMd3g4Rbxv46lS0xv7LSkGugvjLuBqpstymoRpMbmRvfxVGMU2QQ6w+9FP4Vig8uIA1E+Y18bJNcCSGcVTJykZrj81oB2jZMh5LiGACIJBvO1iBrPRWmLqScoMcz4DbyCrcRQLO9MtMTtBAkAbxp8VBE34OsrszEOkEHyBFlJc4OIyg8jyiNfHX1VU8AC0vJPeMaD/wBVhh+60kz7osLmL6KRBo49jGseCCScuXWGwTrG+liquu5s3AvzuD1voZ+altzGWzyMk7zP7BV9RkyXEmDzsPs/NOUPgewtetRINN9iJLTJb4R4RpCtsJ2vB7tRhaZiRcE/MKnoyR3Yta8+aDRa4kHXvQOWwhFdPGT/AFP/ACZs2bHCe3z8F5j+OvLP9N+XqNY6SFBZxuvkyGqXZhck94eBChcRggNOir3YRsZiWt2ABg33hOMU412oyqVlSyOtL4Ld2Kzg03ucGuc1ztLls77+8nH18NTFmBzotmMnyAsqSlTbMhxJnQT6p+rhWg3IBNzeYPKdkVLflvX0TwrDNed/s7iuLPquALoaNBN+krjKznOyb87QmW0heGy6fPwhWwwDy3O1oBEd3NqN/vqpJSlpI37SNF2UJBcC7UCBr4rUscsV2YY9rznt3TuDNxG62dEroYH+Bz+o/wBsl0lY0RZQKIVjT0WmTMxyELiFMQ4ELi6EACChCiAh7JCp8RTLCrpM4iiHCCk1saZEoVVziFUNpPJEjKRHjb91Ge0sKViKgNN9/wAruu3LdQp/iyaX5IxL8N3QIsJsIAGkmdSepQ45BaJAMEO73nAg2UTi2IyuguzQdiQCJiS0aD01TD8S4Ma5xMHMAZ1HL/1chnX7WLxGKAGa0a2tc2hVeO4m2S5wGaIggEAzAMcwnH4sEuGoBcZvBN9dufqstxR4mRItEbSLQpxPcwfCDFY57+63a4vG+vqpGHDgGtc+WmC4fzRaegdKZo4dgyu1sJg2PNT8RQaIINiO90PL75q2mktI5PUdVTfbL4DDPIuHZXN7oIAJv3bW1glJp4406hLYEw0yJAbIJtz7o9FFxEkhoMaGdDIdIPjB+C4/vvc9zozEmwdv5JKdlUZbent8G7wjWuJd4fFs7bXTeJogbXNzygC2tlSdnMX7rNrCNx9wtLi8PmaTzPw+wstrtrR24ruS2VjKYcO6baeKceMgaCbfIc1ABLDoTAsCbXImIFlz2heBM21HTx3sm0NoXUxGUmAAfUGeto3UQYl7Scw1sTsZspuJpjLI1A8Z23VRWquiHcpUpWyrJXwSqWKLnWaA3aNoECE3Up3Ds2XnppyUfBVgAAeRsdTAUGhXdUr5TcZj3fBa+NaRwXNNt0aDE1AG5nX5brOPxTiTBOp9E9icYSXCSWyY8BoodNj3HIDreEKU/RY8fZPL5JWDzF0yYBGmpKn16jXCQdNAd+fgjA0GMb3rqHXpSSWkSSbDXXXzUXKbK5mqTc7LjANc1ntNHS6x0c3pyOo8lYUcQ0gOB10vp/lVuBw7g3JmiTMcp25BWmEwzWe7aSZm/oFRSWzsYZqZX6JfDyfaNdpLgIvGvgtnRKyXDwA8ESR15haOhWmwWzp+JKeo5ousNc9FPaVDwzIAUxq2oysUhCFIQprk4Co+HrtqNzN8xuDyKdaVFUmtobTT0xxC4F1NiBcIXUJAR8RRDhBVNjcK5oIuWkEGORWgISHskKNSqRKa0eU9oJc9rSQACBAkmAAMxMX0NvDxVY6lDO8SQALciToB4g+q9F432cbVhzTlcNvynp0n91g+0OFr0WkPoOge65hzsiZudW7681zawWvR046iWkU+MrOLCW2AaALRY5gMwG+qrMRgy8F4MsGpIM6C8QN1IpVsw920XvuBaBopbMa+MrafmIhJbgy9X1fau2SvfRLAGPOawLMotoLa2A8Erh7C54a6coM9J6lWDM4BNi3QZssc573yCh0XvJDGkkOd7sw2SfRLe+TmN93LJNfDPqVoY3OGjYd0dCdFYUeHezH+oIjU/lPUHbwKVhMXWpVBRe6mwSO65oDYJ2cz91UcdxFX21Qy9rA8sguJb/Ty0vCvxtKdryWS+1cELC8QbSrOdBLC8xtaTBPSDovRacOAvYgEct/oV5lia9g0OkQD7okEi4nVXfAe0LWNFOpaAGsdNon806QLSFTljuXclybumz6/Gnx6L7GMBl51EgePPxUJ9MNANted4tt5pyu8PAykX5GW+OaUwzERmEgGMoJE6ybEjX6LOk/B0t7RKw1OSQLwC6NwIueqi4jAMeSSSBAi0AqPUrNyh4AFobM5pAi97HdSMJXlpLmiAd+dvv1UttEax7IrODCS5pdI5qI7CZRnDdTBPVamnWbuLx8Z/wDEujSYHBzgCJLjOhnw5prI0Z6wb8ow76TRYjwspmFwTmjPkd3oMkESDy5ha11JrXZwAHSQHACYO0+CYc+0u1AtJ2Atqb+QUlnIZOk/kWmzLYqg+CwCGEieu0eqSzA5AXOMWvzt0Vhj8RLSCRtAbzmY+KYqVM4OblbS5try0T72y6MU457UiTgC3RroJtHMT8dlZOomCNSDI6NI+uyr+GZA2bTMbTN4sbp78RLjlJk93KDMjkRooJbZOnwW+HqHQi/7/crUcKwpEOdrsFT8BwJ994vt0+q1mHpLo4Yank52ak64JNIKS0JFNikNYtSKBEIT0ITAyVCu5jszTB+BHIjdaHBY5tYW7rtx+45hZB+IYPzfRM//AKDGkFuaRcEW+Mrl4stQ/o6F4Va+zfi1ilhZfh3athIZWGXk/bzEW8VpGGQHNIc0iQQZBHOV0IuaW0YripeqHAUFcBXVIgCCuhCAEOYmn0gRcJ+EEIAyHHux9Ks2aYbTfMyB3XdHAfPosTxrs/iaTGsaxxLnd5zJIDQNJAtM/BeyFqS5ipvDNPbI1Krk8O4rgQzDMBLw9ru80iBfQkHlED+pQsNgXwXgTBbIGvePL71Xu1fCMeIexrhyIB+arq3Z3Du/IG/0kt/wqn03wyKgwlHhDHup1Xkue0d7MB3hByteDN2zrvC52i4M7EZXNddjXw3YudEX2uAto7s00e693nB+SG8HcOR8/qprFxon2rR4rieAYhr4dTcZj3e8OW3gotbgeJa/KKL3SJENOhn6L3luBjVhS/w7f0n0UlhFo8/4H2ayMBdmzOAJB2PLrCk4ngTdQCFt/Yt5JD8O1TeOGtNFqyWvDPOcRwcZpItMmPkon4OHSZyi+USLTv5L0mpgGFRKnBmO2+CpvpZfjgvjq6nzyYRxeHez1i0zABN9/JIqYmqQGgCAR49FtX9m590OHgCo57IVTo6P6gOg8dlnrpKXg0Lq5fkzYqOlskwIveBEzPPaPBQsfipGT3Y1J5xr4FbGj2IxG+KyiZhrM1+YmBKlN/h7h3Xqvq1OhcGN9GAH4pT0lb50FdXK8HlznszRnGY6DyS6PC8VXP8ApU3NbNnPltud7r2XAdlMLR/+dBjTzygu9TdWjMG0aALTPTJcsz31VPhHlHC/4fVDBrVXO6Dut/ytnw3snTpiwWqbSHJONYr1jleih3T9kHD8Pa0WCmMpAJ1EKeiBwBdhdAXYTATCEqEIA8wLCeQ+KQ6gN3H4AfunX1JTJdrdcg64Gm0beskqXgOLVKB7h7s3a6cp8tj1CrnjmZ8EktOwPwCctp7QqlUtM9A4b2io1Ya4+zefyuNj4O0PzVzcLyN1MnUCPFWPDOP16Fg/O39L5cPIky35dFqjqPVGW+l9yelylArN4Dthh32eTSd/Ndv9w084WhpvDhmaQ4HQtII9QtE1NeGZamp/0hcoXF2VIiEIhKQgBGVchOJKBaOZUZV2EQgYmFzIlwiEAN5Aj2YS4RCAEezC7kSoQnsBORGVKQkByFyEqFwhMRyELsIhMAARC6F1IZyEQlpDngXJhMDqCVRcY7V4fDjvVAXfpFyfIXXn3HO31erLKI9m3TMbujoNB8VVWVSWTiqj1d2PpixeEL58qPqOJcSSTckuN0Kr+x9F39f7N+5rNz8Skl7dh9+aSaZ5fsk+xdrIHxWI2HC+Nky9x+wnvw97uJ8l32I1uUD2RCT4Jh7SrDI3YDxSHEDkgZW1KDth9ErB1q1E5qdVzOjTY+LTYqXWfOgn4qM5hIs0/JS214Frfk0GD7dVmwKrG1BuW9x30PwWhwPbTCPs55pnk8QP7hb4rzl+FcZuAPFRnYUDdWznpFNdPFfR7bh8Sx4zMe1w5tII+CdleFU5YczHFh5tc4H4K0w3afHU9Krnjk9ocPU3+KunqF7RRXSv0z2GULzbDfxBri1Sgx3Vri0+l1a0P4h4c++x7PRw+BVqzQ/ZW8Nr0bZCzeH7aYJ/+8G/1At+YVjR43hn+7WYf+wUlcvwytxS8os0KOzFsOj2nzSxVb+oKWyOhaUm/aDmF32g5hAC0mEk1BzC4azf1D1SAWhMOxbBq9vqmKvF6LdajR5o2hpNk5JJVHiO1uEZrWZ/cPqqvE/xDwbdHF3gCfkFHvleySx2/CNhK6V5ti/4oMFmUnHxgD5qjxn8RcS/3WtZ6u+ii80osXT2z2N1RrdSB4lVnEO0eGoiX1WjzC8RxfaDE1PfrP8ABpyj4XVcQSZMk8zc+pVddR8Itnpflnp/FP4nUxIoMc88/dHqfosbxPtfi68y8sb+llvV2vpCpWtPJPMYeSprLT8stWKZ8IZa1xMmSdydT5lPMpnknm0yn2UTzCr2WjHszyQpnsEJbA2ReEz7W+wQhRAIcb/RDqZO4+KEJgBw7ZuSV38IDcNHmVxCQt8CzhjGoHgmBhDpP7IQkxoT+CGhHxTQwwn3R9+aEJjOPw7ptAUSrh9/8IQgSItSkOvqo76DeX7rqE0NkZ9KEy6mhCBCQXDQkeBj5J1uIrDSpUHg931QhPYaR0cSxA/36g/7u+q4eK4r/kVP7yhCe2R7UcdxTE/8ip/cUy7iOIOtd/8Ae/6riE+5jUoadVedajz4ucfmUyWTqSfFCEtktB7MIDAhCBigzoltpfdkIQIWKSU2kV1CTAdbRTzKPVCFERIZhxzUhlAIQmA7+F6fFCEJgf/Z',
      ingredients: ['French Fries','Pork Meat','Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://veganwithgusto.com/wp-content/uploads/2021/05/speedy-spaghetti-arrabbiata-1st-image.jpg',
      ingredients: ['French Fries','Pork Meat','Salad']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
