import { EmailDto } from "../dtos/email.dto";

export const aprovedTemplate = (dto: EmailDto) => {
   let template =`

   <div dir="ltr" lang="es" style="background: #ffffff; margin: 0; padding: 0">
   <img
     src="https://ci3.googleusercontent.com/proxy/ESl_8xU4NXJ-ZJ7k_74TCj3hY6wnNJyvf9bKrJei9EBiXDwgFV3RsVZosGda5jTQbqOgg6kRzLAA2baMLvEy-HUuYUYeu95Znv4zniNqZNgNNl-NHUfLgi0iKQO5MmbN8eJTjP49IDlSg7UiBwLGp5vvlnNbjIoZqCnDl_DIMBGhxkvuZzDB3nqcMG5tgPoDwwRxKdq3pZn0TuxM7stah27yKsAyhyijgSbns372ZxjnPpb2IY3RvT18jTR61AjKb5Kx14qcVaH8CZ55QtydToapseDqacvF6z07OudbkaeqBHmnBlfHg7pj8njSZGReW8d0r4icA5waiBkU9sQFNnkbQaE1nzxmQo8-3Ii6iky4c_5hvL6wb8sLedgOZCEUJodpKinz9_dDXPr0CugGbBYa4L6267TpnmvQqCmo9w-slJT06bt2t5OZfekJ5MCCKKARpV2oPx4pgBuJX6oLbjlSVggKAcprlLsMnSZIytR0UM6tXzw8-f5VZtwa-1FTGv0H4I83Cobz1ONLn_j_wbha-lVXP-GfV1VaEpFJBjHqptKahm7W3l9hLBhlSmWVV7j9OTLx7THKcJ3L-p8SLtbg2SYYWjfQNwZxCZ_Ym_EcqLz84QYz9uDPjxrQg8n1LptqVsKcrBVpngwed5X8BDP7SQswNqYfUYgbNdksr13Y4IvZju2xAHyOBCtxR1173FHIPrKrsROM4N1yI_o2Q-F-VHhSF_rrOlA2L243wqNn9wsd-ornuO2hO9nrjyuhidLaXE5hlbsgK8ZkWlTW9ZY6Vn6ZA8rNgSr4dy9tI4JzWpnfRoVa-7_CrYmKnvZKIBJnJypTZaC-B69FhUZB3lQmECfEONA62eyh8xov-HVIu7SyfD8SDibAYSiMfSyZ0323WRqJVNjQAQDuQ17UaUBcbOT86GQGW741nqGqjMRtmtSkWNJgPqKdHNcuI5x_pQYQ4xjU7YMl3rRPBn388B1jV9tmxo5DLByAPKC9hBRfQ4rkjwD2cR5z68Et5-pjEdtIhgh7hSznSnRcZBwck8ELHg3hRE1d4S_WLE0=s0-d-e1-ft#https://pdk7s80bs6.execute-api.us-east-1.amazonaws.com/prod/excess-aws-track-email-open?encodedtrack=6d7ea1e82d07e63721aedf215ff59d1b1154503ceyJib2R5X3RlbXBsYXRlX2lkIjogIjM2NDk2NGRmLWZjNjEtNDFkMS04NzJjLWRlYmNjMDJkMDY3OSIsICJkYXlfb2Zmc2V0IjogNiwgImRpcmVjdGlvbiI6ICJlbjwtZXMiLCAiZGlzdGluY3RfaWQiOiA4ODc1OTI0NDcsICJlbWFpbF9kb21haW4iOiAiZ21haWwuY29tIiwgImVtYWlsX3NlbmRfdGltZSI6IDE2NTc3MzgxNDU3MjMsICJlbWFpbF90eXBlIjogInByYWN0aWNlIiwgImxhc3Rfa25vd25fY291bnRyeV9jb2RlIjogIkJSIiwgImxlYXJuaW5nX2xhbmd1YWdlIjogImVuIiwgInByZXZpZXdfdGVtcGxhdGVfaWQiOiAiNGQ3YjkxMzAtYjg2Zi00MTU3LTk0MjYtZTJkY2NkYTcxMTZiIiwgInN0cmVhayI6IDAsICJzdWJqZWN0X3RlbXBsYXRlX2lkIjogImMzOGFhMTVhLThjY2ItNGRmZS1iZDIxLTUwOTdiYTcxYWVhZiIsICJ1aV9sYW5ndWFnZSI6ICJlcyIsICJ1c2VyX2lkIjogODg3NTkyNDQ3LCAidXRjX29mZnNldCI6IC00LjB9"
     style="display: none"
     class="CToWUd"
   />

   <div
     style="
       display: none;
       font-size: 1px;
       color: #ffffff;
       line-height: 1px;
       max-height: 0px;
       max-width: 0px;
       opacity: 0;
       overflow: hidden;
     "
   >
     ID-${dto.creditId}
   </div>

   <div
     style="
       display: none;
       font-size: 1px;
       color: #ffffff;
       line-height: 1px;
       max-height: 0px;
       max-width: 0px;
       opacity: 0;
       overflow: hidden;
     "
   >
     &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr />&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr />&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr />&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr />&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr />&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr />&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
   </div>
   <table
     align="center"
     border="0"
     cellpadding="0"
     cellspacing="0"
     style="width: 100%; min-width: 100%"
     width="100%"
   >
     <tbody>
       <tr>
         <td align="center">
           <table
             border="0"
             cellpadding="0"
             cellspacing="0"
             style="width: 100%; max-width: 600px"
             width="600"
           >
             <tbody>
               <tr>
                 <td
                   height="32"
                   style="
                     height: 32px;
                     min-height: 32px;
                     line-height: 32px;
                     font-size: 1px;
                   "
                 >
                   &nbsp;
                 </td>
               </tr>
               <tr>
                 <td align="center">
                   <span
                     style="
                       font-family: Arial, Helvetica, sans-serif;
                       font-size: 16px;
                       font-weight: bold;
                       line-height: 19px;
                       letter-spacing: 0.4px;
                       color: #a0a0a0;
                     "
                   >
                     ID-${dto.creditId.split('-')[0].toUpperCase()}
                   </span>
                 </td>
               </tr>
               <tr>
                 <td
                   height="16"
                   style="
                     height: 16px;
                     min-height: 16px;
                     line-height: 16px;
                     font-size: 1px;
                   "
                 >
                   &nbsp;
                 </td>
               </tr>
             </tbody>
           </table>

           <table
             border="0"
             cellpadding="0"
             cellspacing="0"
             style="max-width: 600px"
             width="100%"
           >
             <tbody>
               <tr>
                 <td align="center">
                   <table
                     border="0"
                     cellpadding="0"
                     cellspacing="0"
                     width="100%"
                   >
                     <tbody>
                       <tr>
                         <td
                           align="center"
                           style="padding-left: 24px; padding-right: 24px"
                         >
                           <div>
                             <table
                               border="0"
                               cellpadding="0"
                               cellspacing="0"
                               style="
                                 width: 234px;
                                 margin-top: 16px;
                                 border-spacing: 0;
                                 border-collapse: collapse;
                               "
                               width="234"
                             >
                               <tbody>
                                 <tr>
                                   <td
                                     align="center"
                                     height="43"
                                     style="
                                       border-collapse: collapse;
                                       background-color: #1cb0f6;
                                       border-radius: 9px;
                                       white-space: nowrap;
                                     "
                                   >
                                     <span
                                       style="
                                         display: inline-block;
                                         width: 100%;
                                         font-family: Arial, Helvetica,
                                           sans-serif;
                                         font-size: 16px;
                                         font-weight: bold;
                                         line-height: 19px;
                                         letter-spacing: 0.4px;
                                         color: #ffffff;
                                         text-align: center;
                                         text-decoration: none;
                                         background-color: #1cb0f6;
                                         border-radius: 14px;
                                         border-top: 12px solid #1cb0f6;
                                         border-bottom: 12px solid #1cb0f6;
                                         text-transform: uppercase;
                                       "
                                       target="_blank"
                                     >
                                       &nbsp;&nbsp;APROBADO&nbsp;&nbsp;
                                     </span>
                                   </td>
                                 </tr>
                               </tbody>
                             </table>
                           </div>
                         </td>
                       </tr>

                       <tr>
                         <td height="24" style="height: 24px; line-height: 24px">
                           &nbsp;
                         </td>
                       </tr>

                       <tr>
                         <td
                           align="center"
                           style="padding-left: 24px; padding-right: 24px"
                         >
                           <img
                             alt="Logo"
                             height="auto"
                             src="https://patioserviceonline.com/uploads/mr_cash/logo.png"
                             style="
                               display: block;
                               border: 0px;
                               border-radius: 15px;
                             "
                             width="200"
                             class="CToWUd"
                           />
                         </td>
                       </tr>

                       <tr>
                         <td height="24" style="height: 24px; line-height: 24px">
                           &nbsp;
                         </td>
                       </tr>

                       <tr>
                         <td
                           align="center"
                           style="padding-left: 24px; padding-right: 24px"
                         >
                           <table
                             align="left"
                             border="0"
                             cellpadding="0"
                             cellspacing="0"
                             width="100%"
                           >
                             <tbody>
                               <tr>
                                 <td align="center" style="padding-top: 16px">
                                   <h1
                                     class="m_6538563120542342843mobile-heading-shrink"
                                     style="
                                       margin: 0;
                                       font-family: Arial, Helvetica, sans-serif;
                                       font-size: 42px;
                                       line-height: 50px;
                                       font-weight: 700;
                                       letter-spacing: 0;
                                       color: #4c4c4c;
                                     "
                                   >
                                     Tu solicitud de pr&eacute;stamo
                                   </h1>
                                 </td>
                               </tr>
                             </tbody>
                           </table>
                         </td>
                       </tr>

                       <tr>
                         <td height="24" style="height: 24px; line-height: 24px">
                           &nbsp;
                         </td>
                       </tr>

                       <tr>
                         <td
                           align="center"
                           style="padding-left: 24px; padding-right: 24px"
                         >
                           <table
                             border="0"
                             cellpadding="0"
                             cellspacing="0"
                             style="width: 100%; max-width: 390px"
                             width="390"
                           >
                             <tbody>
                               <tr>
                                 <td align="center" style="padding-top: 16px">
                                   <p
                                     style="
                                       margin: 0;
                                       font-family: Arial, Helvetica, sans-serif;
                                       color: #555555;
                                       font-size: 15px;
                                       line-height: 25px;
                                       font-weight: 400;
                                       letter-spacing: 0;
                                     "
                                   >
                                     ¡Hola ${dto.name}! Nuestro personal a
                                     revisado la garantía y está todo correcto.
                                     Pronto se te hará el desembolso. Puedes ver
                                     más información en nuestra app.
                                   </p>
                                 </td>
                               </tr>
                             </tbody>
                           </table>
                         </td>
                       </tr>

                       <tr>
                         <td height="24" style="height: 24px; line-height: 24px">
                           &nbsp;
                         </td>
                       </tr>

                       <tr>
                         <td
                           align="center"
                           style="padding-left: 24px; padding-right: 24px"
                         >
                           <table
                             border="0"
                             cellpadding="0"
                             cellspacing="0"
                             style="
                               border: 2px solid #e5e5e5;
                               border-radius: 16px;
                               max-width: 430px;
                             "
                             width="100%"
                           >
                             <tbody>
                               <tr>
                                 <td style="text-align: center">
                                   <table
                                     border="0"
                                     cellpadding="0"
                                     cellspacing="0"
                                     width="100%"
                                   >
                                     <tbody>
                                       <tr>
                                         <td
                                           align="center"
                                           style="padding: 20px"
                                           valign="top"
                                         >
                                           <table
                                             border="0"
                                             cellpadding="0"
                                             cellspacing="0"
                                             width="100%"
                                           >
                                             <tbody>
                                               <tr>
                                                 <th
                                                   align="center"
                                                   style="padding: 6px"
                                                 >
                                                   <b
                                                     style="
                                                       font-weight: 700;
                                                       color: #ff9600;
                                                     "
                                                   >
                                                     Pending
                                                   </b>
                                                 </th>
                                                 <th
                                                   align="center"
                                                   style="padding: 6px"
                                                 >
                                                   <b
                                                     style="
                                                       font-weight: 700;
                                                       color: #ff9600;
                                                     "
                                                   >
                                                     Preaprobado
                                                   </b>
                                                 </th>
                                                 <th
                                                   align="center"
                                                   style="padding: 6px"
                                                 >
                                                   <b
                                                     style="
                                                       font-weight: 700;
                                                       color: #ff9600;
                                                     "
                                                   >
                                                     Esperando
                                                   </b>
                                                 </th>
                                                 <th
                                                   align="center"
                                                   style="padding: 6px"
                                                 >
                                                   <b
                                                     style="
                                                       font-weight: 700;
                                                       color: #ff9600;
                                                     "
                                                   >
                                                     Aprobado
                                                   </b>
                                                 </th>
                                                 <th
                                                   align="center"
                                                   style="padding: 6px"
                                                 >
                                                   <b
                                                     style="
                                                       font-weight: 700;
                                                       color: #afafaf;
                                                     "
                                                   >
                                                     Desembolso
                                                   </b>
                                                 </th>
                                               </tr>
                                               <tr>
                                                 <td align="center" valign="top">
                                                   <img
                                                     height="32"
                                                     src="https://ci6.googleusercontent.com/proxy/vhveIloY_GKtkDTTjfhDj_6dBc12KziRo3YdR8_ZococREpN98dAUZXZx2tjkDz5EDYfFjDuJyzo_rdLZ2tEDwzMFORHwPAED9q2SMGPP4u_7g8PgEPMGKmWYMCHcny3J-EG2B6neco=s0-d-e1-ft#https://d2h7jmc5kw17oy.cloudfront.net/images/emails/progress/checkmark-empty-dash.png"
                                                     style="
                                                       display: block;
                                                       border: 0px;
                                                     "
                                                     width="30"
                                                     class="CToWUd"
                                                   />
                                                 </td>
                                                 <td align="center" valign="top">
                                                   <img
                                                     height="32"
                                                     src="https://ci6.googleusercontent.com/proxy/vhveIloY_GKtkDTTjfhDj_6dBc12KziRo3YdR8_ZococREpN98dAUZXZx2tjkDz5EDYfFjDuJyzo_rdLZ2tEDwzMFORHwPAED9q2SMGPP4u_7g8PgEPMGKmWYMCHcny3J-EG2B6neco=s0-d-e1-ft#https://d2h7jmc5kw17oy.cloudfront.net/images/emails/progress/checkmark-empty-dash.png"
                                                     style="
                                                       display: block;
                                                       border: 0px;
                                                     "
                                                     width="30"
                                                     class="CToWUd"
                                                   />
                                                 </td>
                                                 <td align="center" valign="top">
                                                   <img
                                                     height="32"
                                                     src="https://ci6.googleusercontent.com/proxy/vhveIloY_GKtkDTTjfhDj_6dBc12KziRo3YdR8_ZococREpN98dAUZXZx2tjkDz5EDYfFjDuJyzo_rdLZ2tEDwzMFORHwPAED9q2SMGPP4u_7g8PgEPMGKmWYMCHcny3J-EG2B6neco=s0-d-e1-ft#https://d2h7jmc5kw17oy.cloudfront.net/images/emails/progress/checkmark-empty-dash.png"
                                                     style="
                                                       display: block;
                                                       border: 0px;
                                                     "
                                                     width="30"
                                                     class="CToWUd"
                                                   />
                                                 </td>
                                                 <td align="center" valign="top">
                                                   <img
                                                     height="32"
                                                     src="https://ci6.googleusercontent.com/proxy/vhveIloY_GKtkDTTjfhDj_6dBc12KziRo3YdR8_ZococREpN98dAUZXZx2tjkDz5EDYfFjDuJyzo_rdLZ2tEDwzMFORHwPAED9q2SMGPP4u_7g8PgEPMGKmWYMCHcny3J-EG2B6neco=s0-d-e1-ft#https://d2h7jmc5kw17oy.cloudfront.net/images/emails/progress/checkmark-empty-dash.png"
                                                     style="
                                                       display: block;
                                                       border: 0px;
                                                     "
                                                     width="30"
                                                     class="CToWUd"
                                                   />
                                                 </td>
                                                 <td align="center" valign="top">
                                                   <img
                                                     height="36"
                                                     src="https://ci6.googleusercontent.com/proxy/j2Wd4_O_pQLP2uhZ1_YRg0GdySRA0FjszqUa-SO0gckcvGqFZa25aTC8IvGu_Sg7z0bVYgwUD74_fWHfy6QXu3Qc7ER5DmGTOBW-ecEqJtctaD7L8kAf0uizM1sJZKYDX8zDdBC2=s0-d-e1-ft#https://d2h7jmc5kw17oy.cloudfront.net/images/emails/progress/checkmark-empty@2x.png"
                                                     style="
                                                       display: block;
                                                       border: 0px;
                                                     "
                                                     width="30"
                                                     class="CToWUd"
                                                   />
                                                 </td>
                                               </tr>
                                             </tbody>
                                           </table>
                                         </td>
                                       </tr>
                                     </tbody>
                                   </table>
                                 </td>
                               </tr>
                             </tbody>
                           </table>
                         </td>
                       </tr>
                     </tbody>
                   </table>
                 </td>
               </tr>
               <tr>
                 <td
                   height="50"
                   style="
                     height: 50px;
                     min-height: 50px;
                     line-height: 50px;
                     font-size: 1px;
                     border-bottom: 2px solid #f2f2f2;
                   "
                 >
                   &nbsp;
                 </td>
               </tr>
             </tbody>
           </table>

           <table
             border="0"
             cellpadding="0"
             cellspacing="0"
             style="max-width: 600px"
             width="100%"
           >
             <tbody>
               <tr>
                 <td align="center" style="padding-top: 23px">
                   <table
                     border="0"
                     cellpadding="0"
                     cellspacing="0"
                     width="100%"
                   >
                     <tbody>
                       <tr>
                         <td
                           style="width: 32px; min-width: 32px; max-width: 32px"
                           width="32"
                         >
                           &nbsp;
                         </td>
                         <td valign="top">
                           <table class="m_6538563120542342843mobile-full-width">
                             <tbody>
                               <tr>
                                 <td
                                   style="padding-top: 4px; padding-bottom: 16px"
                                 >
                                   <table>
                                     <tbody>
                                       <tr>
                                         <td>
                                           <a
                                             href="https://www.facebook.com/mrcashbackbo"
                                             style="color: #a7a7a7"
                                             target="_blank"
                                           >
                                             <img
                                               alt="Facebook"
                                               height="auto"
                                               src="https://ci6.googleusercontent.com/proxy/5a-rV_CqBJvE_fwm46mBxFjm79p6XXC4GwWgQAPKfuv89j4aAEUvIXTUSQRP1Z57uP38GIatDXI8EbKxARcndfsl7lw=s0-d-e1-ft#https://dzvpwvcpo1876.cloudfront.net/Facebook.png"
                                               style="display: block; border: 0"
                                               width="25"
                                               class="CToWUd"
                                             />
                                           </a>
                                         </td>
                                       </tr>
                                     </tbody>
                                   </table>
                                 </td>
                               </tr>
                             </tbody>
                           </table>

                           <table
                             align="left"
                             border="0"
                             cellpadding="0"
                             cellspacing="0"
                             width="290"
                           >
                             <tbody>
                               <tr>
                                 <td align="center">
                                   <table
                                     align="left"
                                     border="0"
                                     cellpadding="0"
                                     cellspacing="0"
                                     width="300"
                                   >
                                     <tbody>
                                       <tr>
                                         <td align="left">
                                           <p
                                             style="
                                               margin: 0;
                                               margin: 0;
                                               font-family: Arial, Helvetica,
                                                 sans-serif;
                                               font-size: 13px;
                                               line-height: 15px;
                                               font-weight: 400;
                                               color: #a7a7a7;
                                             "
                                           >
                                             Calle dechia #282, Santa Cruz,
                                             Bolivia
                                           </p>
                                         </td>
                                       </tr>
                                       <tr>
                                         <td
                                           colspan="3"
                                           height="19"
                                           style="
                                             height: 19px;
                                             min-height: 19px;
                                             line-height: 19px;
                                           "
                                         >
                                           &nbsp;
                                         </td>
                                       </tr>
                                       <tr>
                                         <td>
                                           <p
                                             style="
                                               margin: 0;
                                               margin: 0;
                                               font-family: Arial, Helvetica,
                                                 sans-serif;
                                               font-size: 13px;
                                               line-height: 18px;
                                               font-weight: 400;
                                               color: #a7a7a7;
                                             "
                                           >
                                             Recibiste este correo porque tienes
                                             una solicitud de prestamo en Mr Cash
                                             Back.
                                           </p>
                                         </td>
                                       </tr>
                                     </tbody>
                                   </table>
                                 </td>
                               </tr>
                             </tbody>
                           </table>
                         </td>
                         <td
                           style="width: 32px; min-width: 32px; max-width: 32px"
                           width="32"
                         >
                           &nbsp;
                         </td>
                       </tr>
                     </tbody>
                   </table>
                 </td>
               </tr>

               <tr>
                 <td
                   height="60"
                   style="
                     height: 60px;
                     min-height: 60px;
                     line-height: 60px;
                     font-size: 1px;
                   "
                 >
                   &nbsp;
                 </td>
               </tr>
             </tbody>
           </table>
         </td>
       </tr>
     </tbody>
   </table>

   <div
     style="
       display: none;
       white-space: nowrap;
       font: 15px courier;
       color: #ffffff;
     "
   >
     - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
   </div>
   <div class="yj6qo"></div>
   <div class="adL"></div>
 </div>


   `;

   return template;
}