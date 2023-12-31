# Alad0
A minimalist Python/WebGL system for viewing FITS images.

|Finkbeiner|Mellinger|
|:-:|:-:|
|![image](https://github.com/Cyril-Meyer/Alad0/assets/69190238/79d99696-b928-4604-9131-bc50846dc842)|![image](https://github.com/Cyril-Meyer/Alad0/assets/69190238/7cf1be27-3983-41e7-bd04-39f4b5188d7f)|


Demo : https://cyril-meyer.github.io/Alad0/

## Usage
FITS to PNG conversion.
```
python fits_to_png filename.fits
```
WebServer for CORS policy.
```
python -m http.server 80 --bind 127.0.0.1
```


## External materials

* Deep Star Maps 2020
  * [starmap_2020_4k_gal_print.jpg](https://svs.gsfc.nasa.gov/vis/a000000/a004800/a004851/starmap_2020_4k_gal_print.jpg)
  * [milkyway_2020_4k_gal_print.jpg](https://svs.gsfc.nasa.gov/vis/a000000/a004800/a004851/milkyway_2020_4k_gal_print.jpg)
  * [hiptyc_2020_4k_gal_print.jpg](https://svs.gsfc.nasa.gov/vis/a000000/a004800/a004851/hiptyc_2020_4k_gal_print.jpg)
  * https://svs.gsfc.nasa.gov/4851/
* Axel Mellinger's Milky Way Panorama 2.0
  * [mwpan2_RGB_3600.fits](http://galaxy.phy.cmich.edu/~axel/mwpan2/mwpan2_RGB_3600.fits)
  * http://www.milkywaysky.com/
* Douglas Finkbeiner H-alpha Full Sky Map
  * [Halpha_map.fits](https://faun.rc.fas.harvard.edu/dfink/skymaps/halpha/data/v1_1/maps/Halpha_map.fits)
  * https://faun.rc.fas.harvard.edu/dfink/skymaps/halpha/

## Requirements

* Python >= 3.7.9
  * [Astropy](https://www.astropy.org/)
  * [Scikit-Image](https://scikit-image.org/)
  * [NumPy](https://numpy.org/)
  * [Matplotlib](https://matplotlib.org/)
* Browser with JavaScript and WebGL
  * [Three.js](https://threejs.org/)
  * [dat.gui](https://github.com/dataarts/dat.gui)
