import React from 'react'
import { useParams } from 'react-router-dom'
import EasBanner from '../components/KnowledgeBaseFaq/EasBanner';
import {BiShareAlt, BiMap, BiTime } from "react-icons/bi";
import { Link } from 'react-router-dom';
const CareersPageDetails = () => {
    const id=useParams();

    const singleData=careerData.filter((res)=>res.slug===id.id);
  return (
    <>
     {/* ============ Banner ========== */}
     <EasBanner title={singleData[0].title} />

     <div className="careers-page-details cpy-6">
        <div className="container">
            <div className="careers-page-details-wrapper">
                 {/* <h2>{singleData[0].title}</h2> */}
                 <div className="job-listing-header">
                    <div
                      className="job-title-group d-flex align-items-center gap-3"
                    >
                      <h2>{singleData[0].title}
                      
                      <span className="job-featured">
                        <img src="/images/careers/star.png" alt="" />
                        <span>Featured</span>
                      </span>
                      </h2>
                     
                    </div>
                  </div>
                 <div className="job-tags">
                    <div className="job-tag">
                      <span>
                        <BiTime />
                      </span>
                      <p className="job-tag-name">{singleData[0].date}</p>
                    </div>
                    <div className="job-tag">
                      <span>
                        <BiMap />
                      </span>
                      <p className="job-tag-name">{singleData[0].job}</p>
                    </div>
                    <div className="job-tag">
                      <img src="/images/careers/job-type.svg" alt="" />
                      <p className="job-tag-name">{singleData[0].status}</p>
                    </div>
                  </div>
                <p><b>Experience:</b> 8 years of related experience</p>
                <div className="careers-description">
                    <p>{singleData[0].dis1}</p>
                    <p>{singleData[0].dis2}</p>
                    <ul>
                        <li>
                        {singleData[0].itemList1}
                        </li>
                        <li>
                        {singleData[0].itemList2}
                        </li>
                        <li>
                        {singleData[0].itemList3}
                        </li>
                        <li>
                        {singleData[0].itemList4}
                        </li>
                    </ul>
                    <p>{singleData[0].dis3}</p>
                    <p>{singleData[0].dis4}</p>
                    <p>{singleData[0].dis5}</p>
                    <p>{singleData[0].dis6}</p>
                    <button className='job-apply-btn custom-btn'>Apply Now</button>
                    <p>Apply now on Smart Recruiters: <span><Link to={'/https://careers.smartrecruiters.com/EthereumAddressServiceEAS'}>https://careers.smartrecruiters.com/EthereumAddressServiceEAS</Link></span></p>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default CareersPageDetails;


const careerData = [
    {
      id: 1,
      title: "Director of Business Development",
      slug: "Director-of-Business-Development",
      dis1: `We appreciate your interest in joining the team at Ethereum Address Service (EAS) as a Business Development Development. EAS is mapping the world’s addresses as tradable NFTs. With EAS, real-world addresses become transactable digital address rights designed to generate revenue from their commercial use in Web3 and the metaverse. We envision a future where every real-world address and point of interest has an associated EAS NFT. EAS serves as the platform to monetize and manage these new digital address rights and drive price appreciation for NFT buyers.`,
      dis2: `As a Business Development Director with EAS, your responsibilities will include:`,
      dis3: `The EAS Business Development Director is a remote position and all required assignments are completed virtually. We DO NOT require physical attendance at an office location. The Business Development Director is a commission-based position with the opportunity for salary and additional compensation on a case-by-case basis.`,
      dis4: `To be eligible for this opportunity we would ask that you formally apply through Smart Recruiters. We look forward to meeting you and considering you for the EAS team.`,
      dis5: `Best regards, `,
      dis6: `The EAS Team`,
      itemList1:`Manager of Internal Sales Team –   Responsibilities will include the management of regional sales team/s in your assigned geographical region.`,
      itemList2:`Manager of Operations Team –  Responsibilities will include generating new corporate partnerships.`,
      itemList3:`Corporate Partnerships – Responsibilities will include the management of regional sales team/s in your assigned geographical region.`,
      itemList4:`Prospecting & Sales Outreach – Responsibilities will include research of target buyers and crafting outreach communications to initiate introductory dialogue with prospective institutional buyers and crypto & NFT companies.`,
      date: "March 17, 20023",
      job: "Remote",
      status: "Full Time",
    },
    {
      id: 2,
      title: "Affiliate Marketer",
      slug: "Affiliate-Marketer",
      dis: `We appreciate your interest in joining the team at Ethereum Address Service (EAS) as an Affiliate Marketer. EAS is mapping the world’s addresses as tradable NFTs. With EAS, real-world addresses become transactable, able to generate revenue from their commercial application in Web3. We envision a future where every real-world address and point of interest has…`,
      date: "March 17, 20023",
      job: "Remote",
      status: "Full Time",
    },
    {
      id: 3,
      title: "Marketing Internship",
      slug: "Marketing-Internship",
      dis: `We appreciate your interest in joining the team at Ethereum Address Service (EAS) as a Marketing Intern. EAS is mapping the world’s addresses as tradable NFTs. With EAS, real-world addresses become transactable digital address rights designed to generate revenue from their commercial use in Web3 and the metaverse. We envision a future where every real-world…`,
      date: "March 17, 20023",
      job: "Remote",
      status: "Full Time",
    },
  ];