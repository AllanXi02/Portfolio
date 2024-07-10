import React from "react";
import Accordion from "./Accordion";
import "./AboutSub1.css";
import RPCImage from './imgs/RPC0.png';  // Replace with actual image path
import LicensePlateImage from './imgs/LicensePlate.png';  // Replace with actual image path
import IOSProjectImage from './imgs/IOSProject0.png';  // Replace with actual image path

function AboutSub1() {
  const items = [
    {
      title: "RPC",
      content: (
        <div>
          <img src={RPCImage} alt="RPC Project" className="about1__image" />
          <p>支持长连接 支持异步调用 支持心跳检测 支持JSON序列化 接近零配置，基于注解实现调用 基于Zookeeper实现服务注册中心 支持客户端连接动态管理 支持客户端服务监听、发现功能 支持服务端服务注册功能基于Netty4.X版本实现</p>
        </div>
      ),
    },
    {
      title: "华州车牌图像识别",
      content: (
        <div>
          <img src={LicensePlateImage} alt="License Plate Recognition" className="about1__image" />
          <p>Kaggle 数据集, 结合python 应用 ROI 进行图像 文字提取实现正确率超过85%</p>
        </div>
      ),
    },
    {
      title: "IOS项目介绍",
      content: (
        <div>
          <img src={IOSProjectImage} alt="IOS Project" className="about1__image" />
          <p>API 调用信息以及数据和swift UI 使用 包括图片传输和提取(这个很简单) 通过学习和借鉴 自己重新构建了一个全新的stock API 调用展示 (不如微服务呢, 但是微服务没啥说的, 就是一个简单的集成)</p>
        </div>
      ),
    },
  ];

  return (
    <div className="about1" aria-label="Use OF Rose">
      <h2 className="about1__title">Now, how to Use Rose</h2>
      {items.map((item, index) => (
        <Accordion
          key={index}
          title={item.title}
          content={<div className="about1__item-content">{item.content}</div>}
        />
      ))}
    </div>
  );
}

export default AboutSub1;
