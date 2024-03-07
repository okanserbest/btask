import {
  AppStore,
  GooglePlay,
  facebookIcon,
  instagramIcon,
  linkedinIcon,
  twitterIcon,
  worldIcon,
  youtubeIcon,
} from "@/assets";
import Image from "next/image";
import React from "react";

type Props = {};

const FooterSection = (props: Props) => {
  return (
    <div className="bg-slate-900">
      <div className="max-w-1440 mx-auto">
        <div className="flex flex-col justify-center px-20 bg-slate-900 max-md:px-5">
          <div className="py-12 border-t border-b border-solid border-slate-700 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow py-3 text-base leading-6 whitespace-nowrap text-slate-200 max-md:mt-10">
                  <div className="font-medium text-white leading-[110%]">
                    Product
                  </div>
                  <div className="mt-6">Pricing</div>
                  <div className="mt-6">Overview</div>
                  <div className="mt-6">Browse</div>
                  <div className="mt-6">Accessibility</div>
                  <div className="mt-6">Five</div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow py-3 text-base leading-6 whitespace-nowrap text-slate-200 max-md:mt-10">
                  <div className="font-medium text-white leading-[110%]">
                    Solutions
                  </div>
                  <div className="mt-6">Brainstorming</div>
                  <div className="mt-6">Ideation</div>
                  <div className="mt-6">Wireframing</div>
                  <div className="mt-6">Research</div>
                  <div className="mt-6">Design</div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow py-3 text-base leading-6 text-slate-200 max-md:mt-10">
                  <div className="font-medium text-white leading-[110%]">
                    Support
                  </div>
                  <div className="mt-6">Contact Us</div>
                  <div className="mt-6">Developers</div>
                  <div className="mt-6">Documentation</div>
                  <div className="mt-6">Integrations</div>
                  <div className="mt-6">Reports</div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col pt-3 max-md:mt-10">
                  <div className="text-base font-medium leading-4 text-white">
                    Get the App
                  </div>
                  <Image
                    src={AppStore}
                    alt="AppStore"
                    loading="lazy"
                    className="mt-6 max-w-full aspect-[3.03] w-[120px]"
                  />
                  <Image
                    src={GooglePlay}
                    alt="GooglePlay"
                    loading="lazy"
                    className="mt-3.5 max-w-full aspect-[3.33] w-[135px]"
                  />
                  <div className="mt-14 text-base font-medium leading-4 text-slate-200 max-md:mt-10">
                    Follow Us
                  </div>
                  <div className="flex gap-4 pr-20 mt-5 max-md:pr-5">
                    <Image
                      src={youtubeIcon}
                      alt="youtubeIcon"
                      loading="lazy"
                      className="shrink-0 w-6 aspect-square"
                    />
                    <Image
                      src={facebookIcon}
                      alt="facebookIcon"
                      loading="lazy"
                      className="shrink-0 w-6 aspect-square"
                    />
                    <Image
                      src={twitterIcon}
                      alt="twitterIcon"
                      loading="lazy"
                      className="shrink-0 w-6 aspect-square"
                    />
                    <Image
                      src={instagramIcon}
                      alt="instagramIcon"
                      loading="lazy"
                      className="shrink-0 w-6 aspect-square"
                    />
                    <Image
                      src={linkedinIcon}
                      alt="linkedinIcon"
                      loading="lazy"
                      className="shrink-0 w-6 aspect-square"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 justify-between py-6 text-base leading-6 text-slate-200 max-md:flex-wrap">
            <div className="flex-auto my-auto max-md:max-w-full">
              Collers @ 2023. All rights reserved.
            </div>
            <div className="flex shrink gap-5 justify-between items-center whitespace-nowrap basis-auto grow-0">
              <div className="self-stretch my-auto">Terms</div>
              <div className="self-stretch my-auto">Privacy</div>
              <div className="self-stretch my-auto">Contact</div>
              <div className="flex gap-2 self-stretch py-3">
                <Image
                  src={worldIcon}
                  alt="worldIcon"
                  loading="lazy"
                  className="shrink-0 w-6 aspect-square"
                />
                <div>EN</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
