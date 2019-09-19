/*
* @Author: lifangfang
* @Date:   2019-06-20 15:15:09
* @Last Modified by:   lifangfang
* @Last Modified time: 2019-08-22 15:20:24
*/
import { eAccordion } from "@/components/accordion";
export default {
    name: "area-accordion",
    extends: eAccordion,
    props: {
        arrowUpIcon: {
            default: "arrow-up"
        },
        iconSize: {
            default: 20
        }
    }
};
