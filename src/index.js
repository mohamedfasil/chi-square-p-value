import matrix from './matrix';

const madd = (values) =>  values / sum;

const mpwr = (value) => value * value;

const div = (m1, m2) => m1/m2;

const LogGamma = (Z) => {
  const S = 1 + 76.18009173 / Z - 86.50532033 / (Z + 1) + 24.01409822 / (Z + 2) - 1.231739516 / (Z + 3) + .00120858003 / (Z + 4) - .00000536382 / (Z + 5);
  const LG = (Z - .5) * Math.log(Z + 4.5) - (Z + 4.5) + Math.log(S * 2.50662827465);
  return LG;
}

const Gcf = (X,A) => {        // Good for X>A+1
  let A0 = 0;
  let B0 = 1;
  let A1 = 1;
  let B1 = X;
  let AOLD = 0;
  let N = 0;
  while (Math.abs((A1-AOLD)/A1)>.00001) {
      AOLD = A1;
      N = N + 1;
      A0 = A1 + (N - A) * A0;
      B0 = B1 + (N - A) * B0;
      A1 = X * A0 + N * A1;
      B1 = X * B0 + N * B1;
      A0 = A0 / B1;
      B0 = B0 / B1;
      A1 = A1 / B1;
      B1 = 1;
  }
  const Prob = Math.exp(A * Math.log(X) - X- this.LogGamma(A)) * A1;
  return 1 - Prob;
}

const Gser = (X,A) => {        // Good for X<A+1.
  let T9 = 1/A;
  let G = T9;
  let I = 1;
  while (T9 > G * .00001) {
      T9 = T9 * X / (A + I);
      G = G + T9;
      I = I + 1;
  }
  G = G * Math.exp(A * Math.log(X) - X - this.LogGamma(A));
  return G;
}

const Gammacdf = (x,a) => {
  let GI;
  if (x <= 0) {
      GI = 0;
  } else if (x < a + 1) {
      GI= this.Gser(x, a);
  } else {
      GI= this.Gcf(x, a);
  }
  return GI;
}

const computeP = (chi, df) => {
  const Z = eval(chi);
  const DF = eval(df);
  let Chisqcdf;
  if (DF<=0) {
    console.error("Degrees of freedom must be positive");
  } else {
    Chisqcdf = this.Gammacdf(Z / 2, DF / 2);
  }
  Chisqcdf=Math.round(Chisqcdf * 100000) / 100000;
  if(Chisqcdf < 1) {
    return(( 1 - Chisqcdf).toFixed(5));
  } else {
    return(0);
  }
}


export default computeP;