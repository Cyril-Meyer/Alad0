import argparse

import astropy.io
import astropy.io.fits
import skimage.exposure
import matplotlib.pyplot as plt
import numpy as np

if not __name__ == "__main__":
    raise ImportError('fits_to_png is not a module')

parser = argparse.ArgumentParser()
parser.add_argument('filename',
                    help='input filename')
parser.add_argument('--rescale-range', default=(0, 1e3),
                    help='the rescale range to apply')
parser.add_argument('--correction', default='log',
                    choices=['log', 'gamma', 'sigmoid'],
                    help='the correction to apply')
parser.add_argument('--preview', action="store_true",
                    help='only preview')
args = parser.parse_args()

if args.correction == 'log':
    correction = skimage.exposure.adjust_log
elif args.correction == 'gamma':
    correction = skimage.exposure.adjust_gamma
elif args.correction == 'sigmoid':
    correction = skimage.exposure.adjust_sigmoid
else:
    raise NotImplementedError


image_data = astropy.io.fits.getdata(args.filename)
image_data = np.moveaxis(image_data, 0, 2)
print(f'{"image shape and type":32}', image_data.shape, image_data.dtype)

'''
hdu_list = astropy.io.fits.open(args.filename)
hdu_list.info()
image_data = hdu_list[0].data
hdu_list.close()
'''

print(f'{"image values (min, max, mean)":32}', image_data.min(), image_data.max(), image_data.mean())
print('> intensity rescale')
image_data = skimage.exposure.rescale_intensity(image_data, in_range=(0, 1e3))
print(f'{"image values (min, max, mean)":32}', image_data.min(), image_data.max(), image_data.mean())
print('> intensity correction')
image_data = correction(image_data)
print(f'{"image values (min, max, mean)":32}', image_data.min(), image_data.max(), image_data.mean())

if not args.preview:
    plt.imsave(f'{args.filename}.png', (image_data * 255.0).astype(np.uint8))

plt.imshow(image_data)
plt.show()
