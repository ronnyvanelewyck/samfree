/* Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License. */
import "../App.css";

import React, { useState } from "react";

const HamburgerMenu = ({
  onItem1Click,

  onItem2Click,

  onItem3Click,

}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (itemClickHandler) => {
    // Close the menu and then trigger the item click handler
    setIsOpen(false);
    itemClickHandler();
  };

  return (
    <div className="hamburgerFormat">
      <div className={`menu-icon ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="barTitle">menu</div>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      {isOpen && (
        <div className="menu-items">
          <p onClick={() => handleItemClick(onItem1Click)}>My SAM</p>
          <p onClick={() => handleItemClick(onItem2Click)}>Everybody SAM</p>
          <p onClick={() => handleItemClick(onItem3Click)}>Managing SAM</p>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
