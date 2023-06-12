import{_ as l}from"./ListPageTop.07b69e7d.js";import{i as d,n as u,b as p,c as r,j as _,k as i,V as o,l as m}from"./index.b9d88968.js";import{_ as f}from"./VDataTable.eecd90e8.js";import{_ as h}from"./VSelect.a9ee4da0.js";import"./VBreadcrumbs.988773fc.js";import"./index.f1134cc3.js";const v={name:"Credentials",components:{ListPageTop:l},data(){return{breads:[{text:"Credentials",disabled:!0,href:"/credentials"}],headers:[{text:"id",value:"id"},{text:"CredType",value:"credtype"},{text:"Username",value:"username"},{text:"Password",value:"password"},{text:"Domain",value:"domain"},{text:"Host",value:"host"},{text:"Actions",value:"actions",sortable:!1}],selected:[]}},computed:{...d({credentials:n=>n.credential.credentials}),showDelete(){return this.selected.length>0}},mounted(){this.getCredentials()},methods:{getCredentials(){this.$store.dispatch("credential/getCredentials")},create(){this.$router.push({name:"credentialNew"})},async deleteCredential(n){await this.$root.$confirm("Delete",`Are you sure you want to delete credential ${n.id}?`,{color:"red"})&&this.$store.dispatch("credential/deleteCredential",n.id)},async deleteCredentials(){await this.$root.$confirm("Delete",`Are you sure you want to delete ${this.selected.length} credentials?`,{color:"red"})&&this.selected.forEach(n=>{this.$store.dispatch("credential/deleteCredential",n.id)})},async copyToClipboard(n){try{await navigator.clipboard.writeText(n),this.$snack.success("Output copied to clipboard")}catch{this.$snack.warn("Failed to copy to clipboard. You must be on HTTPS or localhost.")}}}};var y=function(){var e=this,t=e._self._c;return t("div",[t(l,{attrs:{breads:e.breads,"show-create":!0,"show-refresh":!0,"show-delete":e.showDelete},on:{create:e.create,refresh:e.getCredentials,delete:e.deleteCredentials}}),t(f,{attrs:{headers:e.headers,items:e.credentials,"item-key":"id",dense:"","show-select":""},scopedSlots:e._u([{key:"item.id",fn:function({item:s}){return[t("router-link",{staticStyle:{color:"inherit"},attrs:{to:{name:"credentialEdit",params:{id:s.id}}}},[e._v(" "+e._s(s.id)+" ")])]}},{key:"item.username",fn:function({item:s}){return[t("div",{staticClass:"point",on:{click:function(a){return e.copyToClipboard(s.username)}}},[e._v(" "+e._s(s.username)+" "),t("i",{staticClass:"fa fa-paperclip center-icon"})])]}},{key:"item.password",fn:function({item:s}){return[t("div",{staticClass:"point",on:{click:function(a){return e.copyToClipboard(s.password)}}},[e._v(" "+e._s(s.password)+" "),t("i",{staticClass:"fa fa-paperclip center-icon"})])]}},{key:"item.actions",fn:function({item:s}){return[t(h,{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function({on:a,attrs:c}){return[t(p,e._g(e._b({attrs:{text:"",icon:"","x-small":""}},"v-btn",c,!1),a),[t(r,[e._v("fa-ellipsis-v")])],1)]}}],null,!0)},[t(_,{staticClass:"ml-2 mr-2"},[t(i,{key:"edit",attrs:{link:""}},[t("router-link",{staticClass:"text-decoration-none",staticStyle:{color:"inherit"},attrs:{to:{name:"credentialEdit",params:{id:s.id}}}},[t(o,[t(r,[e._v("fa-pencil-alt")]),e._v(" Edit ")],1)],1)],1),t(i,{key:"copy",attrs:{link:""}},[t("router-link",{staticClass:"text-decoration-none",staticStyle:{color:"inherit"},attrs:{to:{name:"credentialNew",params:{copy:!0,id:s.id}}}},[t(o,[t(r,[e._v("fa-clone")]),e._v(" Copy ")],1)],1)],1),t(m,{staticClass:"pb-4"}),t(i,{key:"delete",attrs:{link:""},on:{click:function(a){return e.deleteCredential(s)}}},[t(o,[t(r,[e._v("fa-trash-alt")]),e._v(" Delete ")],1)],1)],1)],1)]}}]),model:{value:e.selected,callback:function(s){e.selected=s},expression:"selected"}})],1)},C=[],k=u(v,y,C,!1,null,null,null,null);const S=k.exports;export{S as default};