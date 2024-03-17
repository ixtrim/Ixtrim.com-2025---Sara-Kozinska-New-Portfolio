/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import theme from '../../../theme';
import Link from '@/components/common/Link';
// Import smaller content components here
// import SmallComponent1 from '../path/to/SmallComponent1';
// import SmallComponent2 from '../path/to/SmallComponent2';

const contentStyles = css`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0;
  text-align: justify;
  color: ${theme.colors.white};
`;

const Content = () => {
  return (
    <div css={contentStyles}>
      <br/><br/>
          <p>Whoever you are, your presence here means that I may have (or be) something you are looking for...</p>
          <br/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo tempus mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur mattis felis et tortor porttitor, id suscipit quam sodales. Vivamus euismod imperdiet eros quis posuere. Nam ultricies tristique nunc, ac mollis odio tincidunt et. Curabitur sit amet pretium nulla, ac tincidunt sapien. In vel imperdiet justo, ut condimentum mi. Mauris vitae turpis sed neque lobortis viverra. Maecenas pharetra eros rhoncus convallis tincidunt. Praesent venenatis luctus vestibulum. Mauris lectus purus, tincidunt eu nisi at, pretium dignissim purus. Aenean viverra tincidunt rutrum. Etiam congue dolor non lacus ultricies interdum. Maecenas ac orci arcu. Mauris eu volutpat nibh.</p>
          <br/>
          <p>Sed ac faucibus lacus. In feugiat sodales metus, id porta justo. In hac habitasse platea dictumst. Proin tempus sem eu consectetur ultricies. Nunc et sodales nisl. Sed a luctus sapien. Aliquam eget volutpat quam. Suspendisse eget venenatis quam. Sed facilisis massa ipsum, et accumsan sem dapibus ac. Aenean ullamcorper viverra sagittis. In rutrum maximus tellus.</p>
          <br/>
          <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus nec fermentum dolor. Curabitur eget facilisis odio. In eleifend ut sem sit amet aliquet. Integer venenatis turpis et tellus condimentum posuere. Nulla tincidunt sed quam sed ullamcorper. Morbi suscipit et ipsum sit amet euismod. Morbi elementum leo vel viverra vehicula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc in consequat metus. Praesent sit amet rhoncus dolor, ut volutpat purus. Fusce facilisis ut dolor in tempor. Nam consequat leo nulla, sed malesuada est feugiat sit amet.</p>
          <br/>
          <br/>
          <p>Phasellus pellentesque aliquet lorem, sed pharetra sem gravida id. In non vulputate nunc. Morbi consequat pharetra neque ut tincidunt. Vestibulum tempor facilisis erat, id iaculis turpis blandit a. Fusce rhoncus sapien a nulla pharetra vestibulum. Aenean vel lorem a erat scelerisque efficitur sollicitudin ac risus. Donec vitae aliquet ante, id sollicitudin nunc. Nulla suscipit pellentesque dui, sed aliquet ipsum mollis eget. Nam eget lectus ac libero vulputate varius ac ac ex. Aenean pretium porta nibh, sed vulputate nibh euismod et. Morbi nisl nunc, bibendum vel malesuada non, malesuada eget tortor. Praesent volutpat scelerisque eros, vel blandit erat ullamcorper sit amet. In congue tincidunt ligula, at bibendum ante mattis in. Etiam id vulputate arcu. Sed lobortis mauris eget cursus commodo.</p>
          <br/>
          <p>Pellentesque et quam eget diam varius rutrum vel volutpat metus. Morbi ut orci nec sapien tincidunt molestie. Mauris ut mauris non arcu mattis blandit at vel ante. Phasellus tempor, dolor ut egestas mollis, orci nunc scelerisque lorem, ullamcorper euismod purus nisi efficitur ante. Ut luctus tempus fermentum. Integer et libero sit amet leo tempor bibendum. Phasellus ultrices fermentum neque quis hendrerit. Donec ante elit, lacinia at dui quis, suscipit tempor mi. Cras maximus nisi nibh, non efficitur dui ullamcorper at. Cras lobortis porta tellus eu vulputate. Cras pretium venenatis felis, quis imperdiet tellus convallis vel. Etiam sit amet consequat orci.</p>
          <br/>
          <p>Phasellus pellentesque aliquet lorem, sed pharetra sem gravida id. In non vulputate nunc. Morbi consequat pharetra neque ut tincidunt. Vestibulum tempor facilisis erat, id iaculis turpis blandit a. Fusce rhoncus sapien a nulla pharetra vestibulum. Aenean vel lorem a erat scelerisque efficitur sollicitudin ac risus. Donec vitae aliquet ante, id sollicitudin nunc. Nulla suscipit pellentesque dui, sed aliquet ipsum mollis eget. Nam eget lectus ac libero vulputate varius ac ac ex. Aenean pretium porta nibh, sed vulputate nibh euismod et. Morbi nisl nunc, bibendum vel malesuada non, malesuada eget tortor. Praesent volutpat scelerisque eros, vel blandit erat ullamcorper sit amet. In congue tincidunt ligula, at bibendum ante mattis in. Etiam id vulputate arcu. Sed lobortis mauris eget cursus commodo.</p>
          <br/>
          <p>Pellentesque et quam eget diam varius rutrum vel volutpat metus. Morbi ut orci nec sapien tincidunt molestie. Mauris ut mauris non arcu mattis blandit at vel ante. Phasellus tempor, dolor ut egestas mollis, orci nunc scelerisque lorem, ullamcorper euismod purus nisi efficitur ante. Ut luctus tempus fermentum. Integer et libero sit amet leo tempor bibendum. Phasellus ultrices fermentum neque quis hendrerit. Donec ante elit, lacinia at dui quis, suscipit tempor mi. Cras maximus nisi nibh, non efficitur dui ullamcorper at. Cras lobortis porta tellus eu vulputate. Cras pretium venenatis felis, quis imperdiet tellus convallis vel. Etiam sit amet consequat orci.</p>
          <br/>
          <p>Pellentesque et quam eget diam varius rutrum vel volutpat metus. Morbi ut orci nec sapien tincidunt molestie. Mauris ut mauris non arcu mattis blandit at vel ante. Phasellus tempor, dolor ut egestas mollis, orci nunc scelerisque lorem, ullamcorper euismod purus nisi efficitur ante. Ut luctus tempus fermentum. Integer et libero sit amet leo tempor bibendum. Phasellus ultrices fermentum neque quis hendrerit. Donec ante elit, lacinia at dui quis, suscipit tempor mi. Cras maximus nisi nibh, non efficitur dui ullamcorper at. Cras lobortis porta tellus eu vulputate. Cras pretium venenatis felis, quis imperdiet tellus convallis vel. Etiam sit amet consequat orci.</p>
          <br/>
          <p>Phasellus pellentesque aliquet lorem, sed pharetra sem gravida id. In non vulputate nunc. Morbi consequat pharetra neque ut tincidunt. Vestibulum tempor facilisis erat, id iaculis turpis blandit a. Fusce rhoncus sapien a nulla pharetra vestibulum. Aenean vel lorem a erat scelerisque efficitur sollicitudin ac risus. Donec vitae aliquet ante, id sollicitudin nunc. Nulla suscipit pellentesque dui, sed aliquet ipsum mollis eget. Nam eget lectus ac libero vulputate varius ac ac ex. Aenean pretium porta nibh, sed vulputate nibh euismod et. Morbi nisl nunc, bibendum vel malesuada non, malesuada eget tortor. Praesent volutpat scelerisque eros, vel blandit erat ullamcorper sit amet. In congue tincidunt ligula, at bibendum ante mattis in. Etiam id vulputate arcu. Sed lobortis mauris eget cursus commodo.</p>
          <br/>
          <p>Pellentesque et quam eget diam varius rutrum vel volutpat metus. Morbi ut orci nec sapien tincidunt molestie. Mauris ut mauris non arcu mattis blandit at vel ante. Phasellus tempor, dolor ut egestas mollis, orci nunc scelerisque lorem, ullamcorper euismod purus nisi efficitur ante. Ut luctus tempus fermentum. Integer et libero sit amet leo tempor bibendum. Phasellus ultrices fermentum neque quis hendrerit. Donec ante elit, lacinia at dui quis, suscipit tempor mi. Cras maximus nisi nibh, non efficitur dui ullamcorper at. Cras lobortis porta tellus eu vulputate. Cras pretium venenatis felis, quis imperdiet tellus convallis vel. Etiam sit amet consequat orci.</p>
          <br/>
          <p>Phasellus pellentesque aliquet lorem, sed pharetra sem gravida id. In non vulputate nunc. Morbi consequat pharetra neque ut tincidunt. Vestibulum tempor facilisis erat, id iaculis turpis blandit a. Fusce rhoncus sapien a nulla pharetra vestibulum. Aenean vel lorem a erat scelerisque efficitur sollicitudin ac risus. Donec vitae aliquet ante, id sollicitudin nunc. Nulla suscipit pellentesque dui, sed aliquet ipsum mollis eget. Nam eget lectus ac libero vulputate varius ac ac ex. Aenean pretium porta nibh, sed vulputate nibh euismod et. Morbi nisl nunc, bibendum vel malesuada non, malesuada eget tortor. Praesent volutpat scelerisque eros, vel blandit erat ullamcorper sit amet. In congue tincidunt ligula, at bibendum ante mattis in. Etiam id vulputate arcu. Sed lobortis mauris eget cursus commodo.</p>
          <br/>
          <p>Pellentesque et quam eget diam varius rutrum vel volutpat metus. Morbi ut orci nec sapien tincidunt molestie. Mauris ut mauris non arcu mattis blandit at vel ante. Phasellus tempor, dolor ut egestas mollis, orci nunc scelerisque lorem, ullamcorper euismod purus nisi efficitur ante. Ut luctus tempus fermentum. Integer et libero sit amet leo tempor bibendum. Phasellus ultrices fermentum neque quis hendrerit. Donec ante elit, lacinia at dui quis, suscipit tempor mi. Cras maximus nisi nibh, non efficitur dui ullamcorper at. Cras lobortis porta tellus eu vulputate. Cras pretium venenatis felis, quis imperdiet tellus convallis vel. Etiam sit amet consequat orci.</p>
          <br/><br/>
    </div>
  );
};

export default Content;
