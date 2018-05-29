# Pseudo Random Number Generators

True random numbers can be generated from random fluctuations called _Noise_. When measuring (_Sampling_) Noise, we can obtain _Numbers_.

## John von Neumann's algorithm to generate random numbers

* Select a truly random number called __seed__.
* Input the seed to following mathematical calculation
  * Multiply the seed to itself
  * Output the middle of the result (14641 = 464)
  * Repeat the process with output

## Period

_Period_ is the length before a pseudo random generator repeats itself, it is strictly limited to the length of seed.