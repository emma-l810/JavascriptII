function checkStar(star_type, star_ra, star_redshift){
  console.log("accessed")
  console.log(star_type, star_ra, star_redshift)

  var star_name = ""
  var star_img_src = ""
  var star_desc = ""

  if (star_type == "quasar" && star_ra == "12h 29m 7s" && star_redshift == "0.158"){
    star_name = "3C 273";
    star_img_src = "3c273.png";
    star_desc = "First quasar discovered in 1959. One of the closest and most luminous quasars. \
    Located in Virgo. Has a large-scale visible jet, which is approx. 60kpc long. Is a radio-loud \
    quasar, and emits X-rays, although how it does this is still controversial.";
  } else if (star_type == "two merged spiral galaxies" && star_ra == "08h 38m 24.093s" && star_redshift == "0.01847") {
    star_name = "NGC 2623";
    star_img_src = "ngc2623.png";
    star_desc = "Is the result of a major collision and subsequent merger between two spiral \
    galaxies. Is in a late stage of merging, causing star formation (the blue color) and the two \
    tidal tails. Seyfert and super luminous galaxy. Located about 250 million light-years away in the \
    constellation of Cancer (The Crab).";
  } else if (star_type == "supergiant elliptical galaxy" && star_ra == "12h 30m 49.42338s" && star_redshift == "0.00428") {
    star_name = "M87";
    star_img_src = "m87.png";
    star_desc = "is a behemoth elliptical galaxy (E0P) that sits some 53 million light-years from Earth and \
    holds trillions of stars, a supermassive black hole, and a family of roughly 15,000 globular star \
    clusters. Apparent magnitude of 9.6 and a radius of 60 light years."
  }

  // console.log(star_name, star_img_src, star_desc)

  return star_name, star_img_src, star_desc
}
