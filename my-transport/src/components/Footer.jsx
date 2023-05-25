import React from "react";
import "../style/Footer.css";
import { SlLocationPin } from 'react-icons/sl';
import { MdCall } from 'react-icons/md';

 
const Footer = () => {
  return (
    <div className="Footer">
      <div className="FooterTop">
       
        <div className="FooterTopContent">
            <div className="FooterTopLocations">
            <div >
            <h2>  USA</h2>
            <p>    447 Broadway,2nd Floor, New York, NY, 10013</p>
            <p>  +1 (778) 316-7946</p>
          </div>
          <div>
            <h2>IND</h2>
            <p>
               Regus Office, Level 14, Concorde Towers, UB City, Bengaluru,
              Karnataka 560001
            </p>
            <p>  (+91) 94392 88888</p>
          </div>
          <div>
            <h2>UAE</h2>
            <p>   3001, A A Tower, Sheikh Zayed Road, Dubai, UAE</p>
            <p>    (+971) 52962 9814</p>
          </div>
            </div>
          
          <hr />
          <div className="FooterTopContects">
          <div>
            <h6>Help & Support</h6>
            <div>
             <img src="data:image/png;base64,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" alt="" />
              <p>sales@transportsimple.com</p>
            </div>
          </div>
          <div>
          <h6>General & Sales Enquiries</h6>
             <div>
             <img src="https://w7.pngwing.com/pngs/200/700/png-transparent-whatsapp-computer-icons-emoji-whatsapp-grass-emoticon-chat.png" alt="" />
              <p>+91 63728-01404</p>
            </div>
          </div>
          <div>
          <h6>Join our team</h6>
             <div>
             <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOUAAADdCAMAAABzPkXkAAAAsVBMVEXAAAD////u7u7t7e36+vrz8/O9AAD19fX4+Pjx8fH8/Pzx0NDswMDfl5fcj4/jpqbahYXINDTw9vb99PTquLjsx8f34uLQWVnHLy/XeHj56en77+/NXFzTZmb0+vrNTU3jvr7r3d3t5ubVb2/IQkLn0NDjoaHSZGTDFxfz1tbos7PciYnCDAzr4ODboKDPaWnFIiLHMDDXdXXJSEjIPj7cp6fXkJDDFBTesbHTe3vboqKrW6zCAAAQM0lEQVR4nO2d51rjvBKAbeMokekKJTSnQBaWGpZlF777v7BjWU4sySojW4md8+z8QU+GGL2oTFFxEFLpRZn08+JOVtqJaSmmxWil3+H0CS0NSj0G65NS36dFnOvpL+4MSn0I1vdKfVnpQh+t9ME/yn+U20i5kwn7gJZYLeK8WOr7kn5ASwWFo76oZSYFBS0WFG56rtKxpOeggh6VQZzJIC/SUtynpX5eBOnjlb4P1w8kfR+ud610oGzs3o6iB1J90TZK/aDUY60el3pVD1y1nU7fK/WxXi8POw2lNE6T8gsrfb1xiku9l3HI68tx+I9y3T02whizWvSyUrTJHtvPZDlQaZENZFoqBrKo79fQD1h9ey/z08nklEr2Y/7SY+yD1R+Vvl+pFFwvV2qtliTrgCQMhz9P/tyOR0GARAmC9/GvP3s/h2FIcLReS8I+WIdXkBIy/Xo6DxiRRqjy+frga0pIquiBnfZ9aOHs8Dow8Umsz/eHZ8L3O06JCbk6uf0LBORRH37tDQntvWui9DcuMZm+fkDbUNGm49cXggsKf+Oy/AUbFafX+a2YzB7HNQlL0vHJjGDjbKSkUlKzSvv0Ckhvct8QsQAN3k4J6abvM3xd+EAsQN9f+zJFByivjgJ/jDln8HTljdLHuIzCs1svXVXiRBeXbOIpx13NcUndoISFZgktstAsKyYsNEtEfRHv8fokPLtZAyPjvL0ME75SZbzpUumlJdF45ybvfemdX12siZFxfg/t3vuOqgf3Sn1Tr4CEB2tkzDmD/ZC06vtg8uV5zlFyPnxRh8iD7yM2fhlPmnpsROZ362fMOcdTYuyxqniT77GreI0L3fosNJM+lPXx4GAzjDnnfhpDKqXW17YkWUMebw4yw/ydNeemPTxM/mySMefcz0bnRn0fMv29acgM82NGfFOq7SejTL82jshkkhood1wptV4CozzafEMyQQdmSl0Or5xtoFE0nm3Ifigxxzt4E9ktMn9ujZFiPmRzrdxDvfs+5Ku9hixkQtZO+do6ZIA+a1KCx+UG3R29oH3XcVmEZpkUoRmVIjSjUsSTTJ/+6gJkhvmdFpWO9ZXmoFwsSUSuuwGZYd6SaE3rl7gzkBnmG1mPhxd2CJJihg6U8JjkpkuQGeaFNNuYYhJoPBl2ZOIpBR2F0HgTaklIa66rXtAf4tfDIx1wBqqCPiuRWBPfJ23frVMKqkRi1uyWgXLeTchMpgZKx3xs3GoUYpRFAmpLgCUhLcaTNkHnxE92i3x3F5JmD4gP36cDAaVR0IQ0p4ymbWNYZRZZKW3jkvxuG8Iq42XuQD8uV6EZZqEZpkUWT9Jiut/t/koFHaa00izezOsvx5uW9UvcXUvJCZpic+bSYi/xe9sEIPlNmnh4pBNpHrugV1I/u7Ud/TWXKTbGJAMqLDQriwNWTO/arjxYztNlpUUSVjRakpOtacoAndb28Nquuossavo+6ZZMPUzQj9SZkhqRl7Yr7iizyJyPZQncOCozIFmB3G5TU9J8O4n4dRMeSm9JzrYLMsO80lsSrVdgSb+iNsRcowt338fSlOh2b3fTcnJvqdOVM6VlVO6GbcipmfLb1cO7MkJmNrgdMfspaKgbl5hKEU9SYaFZas71fLQEGYbHRsqDtAiSqRTxJhWNvZyZHlasBbciT+aB5LR+ackQoMO2IENLxT5Zrh1GOViY27KrlMGxhlIZk5xapuzOUqJ5/lua9UsxNAtvjI/qMuVFKAfJuvXLaGZx7rpLmc0/EdDDI/9tLyX6IkDfh9gSIR2mDM4NlHw+Fk9tT1JQxuPFsW9Z3NegRDNtPrbPrYtE9tV1VVsm574jNXRTpy3RJ4m4dRMGpbIkY+vfV/ZYz5tI0JPqj9gXNK5DUHZraH2QZlx6XVKp/zdikO9jz0/qZh+PmU1d1GOnRHsgSnu+RzvH7nrDPNP8BQDlN8jDs2+V4CgfY6ESZ89eTgyProSnXj06UAYL7folDcKKraWAtRGO8nsxFCo09HBgCI0T4ZmXwYELJZpiGapiLzFglxZHeYTkztXYoqBb8YE/ERfPQig/lzcB6NcvyTWgHgKlPFFcNDzJfyA+LpvS3CiD22IF3uDhYUhFBMoAlcMGXBP9s6WH/UCBK+VCR1m675AlS4lS9e+vDanqGI6U6EWGktcvE0gNZUrFUKpLqRzkrpST2LJ+CVpjr1BWp8WHOpyyBRkWBwNdKX8Qi4dHziG1qVBqK+gEKf+r/i4f7kh5Syy+D4Fsn1RQBprO5gKp7faOlMHIRmlLhhgoG1oUwxTmShlUPDzqIERxmCRhHGHcs2TvTJRKIwCHNJgjV0o0F6Awli0JyAhoKJtYFGNHcKY8FaEqXgHsKRrKBhbFOKidKfP6GXwfUMCvpaxpUdDI7PI7Ux5ZKCGGxEBZy6Kgc/FfUwnfnCnv1ZSrLgzaXWigDCqdz7KAnD3tl/iFaijuPMfeiVD8+mW+1Ad5hoVSnkgs294BU5Yz5aInQMnrl+Z1SxhlJWFitCiQgMaZkhpMvVdgTzhDKCtJxj3DU6UNCsrZz51yZqSEbRW1UVYtiu5BMLfQmZJuftZntzDI9bFTAi0Keocljdwp59iwfhn7ogzQQrQoscKioHOxIc909z65U+6mpvVLb5SB3aKww7Cl6JO5NShDk4fnk1K2KLKbJG00eTQ8qRal3vfxSWm2KC4pMXfKUyXlMh/rldJkUZBkQYzLFjUpuXwsdRBCloYOE8+UFcylRUHPl/CWrEdZQtHcumhJJn7bUnLDw/Aqv5YUHQ+lz833k7hTTrAhu+WXUnbDqQzvUMWC5HLodVxOsMn38Ukpu+GF3MsWpBCDG1ijxxopPY5L7SLnnuZznRtYz/cxeHiRJz+W/o4ORi+r/GtzymlUXb8s51jz5l8Xyp/OkD792KE0x+bfXdnLGPIMQEwiWYor9VAMk7FkNsd+YpKcyrB+CbqZwBpfSrFG5obfiSvzBfwIoRPxozcv8eUip9Rnt4w7poGUaCzWnLrhcozC4Okv/xA/VG1mrpf3MWS3mubwgmoIvUzkyCO1mM9ZWrEURf7EOYd3I0KF0v5Y2PVhRkrZq1vVWpp1VzGIvBOtajjd87GptD9WXL+E3ZdqopTNJL9cxKs4lw59iI5gJSPvTPlKjOuXsIsmTFlnyUwK56i4zinEIHKqWk47O1NOsHFlD5beMlCKliH5kKpbdM6kYjHExEI2+TainJspm6xfVis7HFX63jH9N+xVX5ggxZuJcA2N8xwrQUVybj2tvxZdWdQ5U343eFaevZMNJ9/VXSnfUyzl1vPvcpNuzX0FQTU7uQt4Ev9QyXDyT3akvJGhKruaLEeM9JR2g2B7qs4EOe+e+JP/qmnvFmSSVVHKxt0UFeseq3En3Pf7WCkhKyWqnTAAR83+XIVrWIfyRUNZdmECqU11VxPE6QY8WD1/1duHx49LCiyccQdcR1ndoQYKoCCYf6WQjWXD3HaOXlTPuFd2dAMGVIVSMpONdgKLTn1C11ccKU8A+9YBJ/il/bFSUHXZbFe37CPeu+6PRZeQ3fkPbpRygKxPUkExJX//23Gv8wi0O98efAmU0jElZzOpeLyU4tx3oqQmrbI7v3K/D+DmTY7yQsos1zCTiufLDy39BQDlJK3e75N/lz9/CXDYOUopAVDLTCr+gGQ4S/sC6LE7EeT8Jal5ziv0eNRLsZICpbxW3Oiooqx1Zo+Kx2N76OFS+SfsZ/a+9JTCfXgv9SjrbG82iTJvXfP8pXyMhsaYti6rpDzzfk2Mag3CSnmfri7Q4M4GqU7yG5b4tZTJ04Fv+VZ0Wuu56PxfAzh/mZVqUG5IrG2Z/xbs7gnL4cTuUtJjiSGUcuvvnrB7eJmkoy2l/F3cIyKPy/xT4Yw7DTLNjlpnKbOgi9VfgtLcH5uY27K9+33MO2+eHe+PNTukv9tBzMQ4lLL/vtvtYpZ7t9w3DfgRsyVHsev9sebzSy1hWi4Xe9Le+qe63ycrDSwZS3T+uLdpObQkzdBsoLgEV7F+Wf4byJvxiUEblxtaKvRNnO+PBW7U75K8YPf7Y0nDs+qbFvRU3jkKvz8WeLakO5KTaCjVdxvmS5lbcG1+KegwFYJk8W5DedJdWhKafP/bdtUdZLR8i5nSkqzGYfVWedzxd3bwgia47t359mxeVwTdk9pvCNgiazLDtd8QANzk1L6g/4j5rWWV9Uuxbbv/DpZgmYrn2s6+frm0lyze3IqbuvPbuRu9/3ILjObyPbVlWzpTdn+eRdeV+3xg2S3u7Ujdd/SeZ/a3lnFLfbEqNIsT2OmL1gTtJrEqSI6N65e8JWFt2+l3W+Qbjcq2a/D+S+8XbfoTti9OObm4vv8yMV9m3aa8hw6Ucj5W+kJ330L3IjVNIhl9Yf2yfI0Z5t/1vXytdtrRGQjNU+ld3/m7wKvvZrNZkmI26uSLktAe9E3KNq9g2YM76APR5Rrf7/7u3KuU89Ua728471hOj2079v6G87qbXtcjxaozcFyu2s70JuVC36GXnGctSSMtLp50t5cayu50WrrwY6W0r1+qKX3ts2sq+cTj3pZQSreb/NYlxU1w7j3WFJMIs9Fn+5joSz/bGNcv40yKeJJKXypyetcjP/4Zg5+ha6UdLEmuz3rwZfUs2iYh36+yHqpqOx8eHj9Or9vDRG/iOPTu+3CzUWvJ6OIIkidKbbzJKNOJ7oqs9TL+PU0NlIZ8bBmacfEkF5r1VPFmvz9rIUuC7iPSV8WT6kpzUM6WZKX3ctrASR4Bs02D7FbFz83/C5d3m+RE40tFD12T78OPU/K6Ocbgk6jG4fopBxF52dDoRPczEg0aU9YYl+Eg8xHIZAMuAjqekMwPGEjjzmVcuvs+oh7vr9mooOCVyFT+fB+TveT1ZHa0Rk4UHMyIoYeqe7Af30f8L5CXb9seubqM6GhGjONwnR6e1NZReHW0Bs6sHYcMqDGl47hkelzVD/e9vBiJY3z4kVTHHZbGHXBc2kIzsD4dnNx5a1CEPvYGafNKFUUuu8U19qqH7hi89wH9MCralunPvr1MRCg4Oiu8b9Z2ES2q7OWq7SyrQcpxCPMKSj0u9V/XDRsUoftlxiN7Ki7HYXOvwB8lJrPP66Amafa1+68ZKd9U5ZdSG0+69VimxyQ+PRpZd2BXCNHx025CsNAjgT1WNefyPZYOzmVoRossNMsHMgvdRD2L52KlPi712ZMvHy8WUNLs90bfJzTo4J6vrFSpN1Va0sfeLEnu1+6s2jYrZWH9cPfH2yjQ76xnmve3w91hGKbRylLkHpzSb61pSXx4BaZxSkg0nxw+3XyMpGMLQTAavx0cTqaYLP3UGuNwg76PiZKOU1b1wexlPj/dpXI6n7/MBuxXhXG4xZSreBRjzGpBXzmhjhfXRLm2cWnS28ad93FZUtWIoqFUst6VSq9fe3bL2kNV+qTUg3poR32ff5RtU/6/j0uVcxTLHhtc31fqY5Ve8tj4L/Xd/qhV77gatMrhuXjvvB6XeqX3DfPOI1U82WR3vkevoBxn2Ns4hHkF/wPAypqkTgdeoAAAAABJRU5ErkJggg==" alt="" />
              <p>careers@transportsimple.com</p>
            </div>
          </div>
          
          </div>
        </div>
        <div className="FormDiv">
            <form  >
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Enter your Email" />
                <label htmlFor="">Message</label>
                <textarea name="" id="" cols="30" rows="10" type="text" placeholder="Type here..." ></textarea>
                 <button>Submit</button>
            </form>
        </div>
      </div>
      <div className="FooterBuotton">
        <div className="FooterBuottonTags">
          <p>Home</p>
          <p>Featuer</p>
          <p>About us</p>
          <p>Blog</p>

          <p>Contact us</p>

        </div>
        <div className="FooterBuottonSocal">
          <div>
             <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="fb"/>
             <img src="https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png" alt="L"/>

             <img src="https://www.freepnglogos.com/uploads/youtube-logo-icon-transparent---32.png" alt="yt"/>

          </div>
          <div className="playStorDiv">
           <img className="playStor" src="https://www.transportsimple.com/redesign/images/play-store.png" alt="playStore" />
          </div>
        </div>
      </div>
      <div className="FooterEnd">
        <div className="FooterEndPolicy">
          <p>Sitemap</p>
          <p>Privacy Policy</p>
          <p>Employee App Privacy Policy</p>
        </div>
        <div className="FooterEndCR">
          <p>copyright © 2023 -2024 Indersons Services Private Limited</p>
        </div>
      </div>
    </div>
  )
};

export default Footer;
